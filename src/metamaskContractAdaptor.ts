"use strict";
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import {EventEmitter} from 'events';


export class MetamaskContractAdaptor extends EventEmitter{

    static FOUND_METAMASK = 'foundMetamask'
    static UNLOCKED_ACCOUNT = 'unlockedAccount'
    static NOT_FOUND_METAMASK = 'notFoundMetamask'
    static NOT_UNLOCKED_ACCOUNT = 'notUnlockedAccount'
    static ENABLED_PERMISSION_TO_ACCESS_ACCOUNTS = 'enabledPermissionToAccessAccounts'
    static HAS_NOT_PERMISSION_TO_ACCESS_ACCOUNTS = 'hasNotPermissionToAccessAccounts'
    static WRONG_NETWORK = 'wrongNetwork'
    
    static ACCOUNTS_CHANGED = 'accountsChanged'
    static CHAIN_CHANGED = 'chainChanged'
    
    static CONNECTED = 'connected'
    static DISCONNECTED = 'disconnected'
    
    static ALREADY_METHOD_TRIGGERED = 'alreadyMethodTriggered'
    static METHOD_CANCELLED = 'methodCancelled'
    
    static ERROR_CODES = {
        ALREADY_METHOD_TRIGGERED : "-32002",
        METHOD_CANCELLED: "4001"    
    }
    

    private provider: any
    private web3: Web3;
    private wildaloContract: Contract;
    // private warcContract: Contract;
    // private fodrContract: Contract;
    private isFoundMetamask = false;

    constructor(
        private targetChainId: string, 
        wildaloContractAddress: string,
        wildaloContractJson : any, 
        // WarcContractAddress: string,
        // WarcContractJson : any, 
        // FodrContractAddress: string,
        // FodrContractJson : any, 
    ) {
        super();

        if(!window) {
            throw Error("Window required.");
        }

        this.provider = (window as any).ethereum;

        this.web3 = new Web3(this.provider)
        
        this.wildaloContract = new this.web3.eth.Contract(wildaloContractJson, wildaloContractAddress);
        // this.warcContract = new this.web3.eth.Contract(WarcContractJson, WarcContractAddress);
        // this.fodrContract = new this.web3.eth.Contract(FodrContractJson, FodrContractAddress);


        if(this.provider) {
            this.provider.on('accountsChanged', (accounts: any) => {
                this.emit(MetamaskContractAdaptor.ACCOUNTS_CHANGED, accounts);
            });
              
            this.provider.on('chainChanged', (chainId: any) => {
                this.emit(MetamaskContractAdaptor.CHAIN_CHANGED, chainId);
            });
    
            this.provider.on('connect', (cnnectInfo: any) => {
                this.emit(MetamaskContractAdaptor.CONNECTED, cnnectInfo);
            });
    
            this.provider.on('disconnected', (error: any) => {
                this.emit(MetamaskContractAdaptor.DISCONNECTED, error);
            });
        }
    }
     
    public checkMetamask() : Boolean {
        const self = this
        if ('undefined' === typeof self.provider) {
            self.emit(MetamaskContractAdaptor.NOT_FOUND_METAMASK);
            return false;
        }

        if (self.provider.isConnected == false
            || self.provider.isMetaMask == false) {
            self.emit(MetamaskContractAdaptor.NOT_FOUND_METAMASK);
            return false;
        }

        if(self.isFoundMetamask == false) {
            self.isFoundMetamask = true;
            self.emit(MetamaskContractAdaptor.FOUND_METAMASK)
        }
        return true;
    }

    public checkNetwork () : Boolean {
        const self = this
        // console.log("self.provider.chainId: " + self.provider.chainId);
        // console.log("self.targetChainId: " + self.chainId);

        if (self.provider.chainId != self.targetChainId) {
            self.emit(MetamaskContractAdaptor.WRONG_NETWORK);
            return false;
        }
        return true;
    }

    public async checkPermissionToAccessAccounts () : Promise<Boolean> {
        try {
            var selectedAddress = await this.getSelectedAddress();
            //console.log("selectedAddress" + selectedAddress);
            return selectedAddress ? true : false;
        } catch(error) {
            if(error.code == MetamaskContractAdaptor.ERROR_CODES.METHOD_CANCELLED) {
                this.emit(MetamaskContractAdaptor.METHOD_CANCELLED, "checkPermissionToAccessAccounts");
            } 
    
            if(error.code == MetamaskContractAdaptor.ERROR_CODES.ALREADY_METHOD_TRIGGERED) {
                this.emit(MetamaskContractAdaptor.ALREADY_METHOD_TRIGGERED, "checkPermissionToAccessAccounts");
            } 
            this.emit(MetamaskContractAdaptor.HAS_NOT_PERMISSION_TO_ACCESS_ACCOUNTS);
            return false;
        }
    }


    //##################################################################################
    //  ALL CHECK
    //##################################################################################

    public async checkConnection () : Promise<Boolean> {
        if(!(await this.checkMetamask())) {
            return false;
        }

        if(!(await this.checkNetwork())) {
            return false;
        }

        if(!(await this.checkPermissionToAccessAccounts())) {
            return false;
        }
        return true;
    }

    public async enablePermissionToAccessAccounts () {
        const self = this
        return new Promise((resolve, reject) => {
            self.provider
            .request({
            method: 'wallet_requestPermissions',
            params: [{ eth_accounts: {} }],
            })
            .then((permissions: any[]) => {
            const accountsPermission = permissions.find(
                (permission: { parentCapability: string; }) => permission.parentCapability === 'eth_accounts'
            );
            if (accountsPermission) {
                    self.emit(MetamaskContractAdaptor.ENABLED_PERMISSION_TO_ACCESS_ACCOUNTS);
                resolve(true);
            }
            })
            .catch((error: { code: string; }) => {
                if(error.code == MetamaskContractAdaptor.ERROR_CODES.METHOD_CANCELLED) {
                    self.emit(MetamaskContractAdaptor.METHOD_CANCELLED, "enablePermissionToAccessAccounts");
                }
        
                if(error.code == MetamaskContractAdaptor.ERROR_CODES.ALREADY_METHOD_TRIGGERED) {
                    self.emit(MetamaskContractAdaptor.ALREADY_METHOD_TRIGGERED, "enablePermissionToAccessAccounts");
                }
                        
                self.emit(MetamaskContractAdaptor.HAS_NOT_PERMISSION_TO_ACCESS_ACCOUNTS);
                resolve(false)
            });
        });

    }

    public async sign(message : string, password: string): Promise<string> {

        var checkResult = await this.checkConnection()
        if (!checkResult) {
            return null;
        }

        return new Promise(async (resolve, reject)=>{
            this.web3.eth.personal.sign(message, await this.getSelectedAddress(), password ,(error : Error, signature: string) : void => {
                if(error) {
                    reject(error);
                }
                resolve(signature);
            })
        })    

    }


    public async ecRecover(message : string, signature: string): Promise<string> {

        var checkResult = await this.checkConnection()
        if (!checkResult) {
            return null;
        }

        return new Promise(async (resolve, reject)=>{
            this.web3.eth.personal.ecRecover(message, signature, (error : Error, address: string) : void => {
                if(error) {
                    reject(error);
                }
                resolve(address);
            })
        })    

    }

    public async getSelectedAddress() : Promise<string> {
        const accounts = await this.provider.request({ method: 'eth_requestAccounts' });
        if(accounts && accounts.length) {
            return accounts[0];
        }
    }
    
    public getSelectedChainId(): string {
        return this.provider.chainId;
    }


    public async getFordBudget() : Promise<String> {
        var checkResult = await this.checkConnection()
        if (!checkResult) {
            return null;
        }
        return "250000000000000";

    }

    public async getWarcBudget() : Promise<String> {
        var checkResult = await this.checkConnection()
        if (!checkResult) {
            return null;
        }
        return "120000000000000";

    }

    private async sendContractMethod(contract : Contract, method: string, ...args : any[]) : Promise<string | Boolean> {
        var checkResult = await this.checkConnection()
        if (checkResult) {
            let from = await this.getSelectedAddress();
            return new Promise((resolve, reject)=> {
                contract.methods[method](...args).send({
                    from: from
                   }, (error: Error, transactionHash : string) => {
                    if(error) {
                        reject(error);
                    }
                    resolve(transactionHash);
                   });                
            })
        }
        return checkResult;

    }
        
    private async callContractMethod(contract : Contract, method: string, ...args : any[]) : Promise<string | Boolean> {
        var checkResult = await this.checkConnection()
        if (checkResult) {
            return new Promise((resolve, reject)=> {
                contract.methods[method](...args).call((error: Error, result : any) => {
                    if(error) {
                        reject(error);
                    }
                    resolve(result);
                   });                
            })
        }
        return checkResult;

    }

    //##################################################################################
    //  ADMIN - CONTRACT METHODS (For Test)
    //##################################################################################
    public async mintFodr(to: string, amount: string) : Promise<any> {
        return this.sendContractMethod(this.wildaloContract, "mintFodr", to, amount);
    }

    public async createCardBase(metedata: string) : Promise<any> {
        return this.sendContractMethod(this.wildaloContract, "createCardBase", metedata);
    }

    public async mintCardWithBaseId(to: string, baseId: string) : Promise<any> {
        return this.sendContractMethod(this.wildaloContract, "mintCardWithBaseId", to, baseId);
    }

    //##################################################################################
    //  CONTRACT METHODS
    //##################################################################################

    public async upgradeCard(cardId: string, burnedCardId: string) : Promise<any> {
        return this.sendContractMethod(this.wildaloContract, "upgradeCard", cardId, burnedCardId);
    }

    public async buyPackage(packageType: string, currency: string) : Promise<any> {
        return this.sendContractMethod(this.wildaloContract, "buyPackage", packageType, currency);
    }

    public async createAuction(currency : string, cardId : string, startPrice : string, endPrice : string, duration : string) : Promise<any> {
        return this.sendContractMethod(this.wildaloContract, "createAuction", currency, cardId, startPrice, endPrice, duration);
    }

    public async cancelAuction(cardId: string) : Promise<any> {
        return this.sendContractMethod(this.wildaloContract, "cancelAuction", cardId);
    }

    public async bid(cardId: string) : Promise<any> {
        return this.sendContractMethod(this.wildaloContract, "bid", cardId);
    }

    //TEST
    public async store(number: string)  : Promise<any> {
        return this.sendContractMethod(this.wildaloContract, "store", number);
    }

    public async retrieve() : Promise<any> {
        return this.callContractMethod(this.wildaloContract, "retrieve");
    }

}