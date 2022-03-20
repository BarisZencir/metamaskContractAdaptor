"use strict";
import { MetamaskContractAdaptor } from "./metamaskContractAdaptor";


var metamaskContractAdaptor = new MetamaskContractAdaptor(
    "0xa869",
    "0x0a133Fa08a7896aCe458f5e4F14Cc3437576C2f1",
    [
      {
        "constant": false,
        "inputs": [
          {
            "name": "_address",
            "type": "address"
          }
        ],
        "name": "setAuctionContract",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_tokenId",
            "type": "uint256"
          }
        ],
        "name": "getApproved",
        "outputs": [
          {
            "name": "_operator",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_to",
            "type": "address"
          },
          {
            "name": "_tokenId",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "isLinked",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_from",
            "type": "address"
          },
          {
            "name": "_to",
            "type": "address"
          },
          {
            "name": "_tokenId",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_owner",
            "type": "address"
          },
          {
            "name": "_index",
            "type": "uint256"
          }
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_address",
            "type": "address"
          }
        ],
        "name": "setCardBaseContract",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_address",
            "type": "address"
          }
        ],
        "name": "isSharedWith",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_address",
            "type": "address"
          }
        ],
        "name": "setRepositoryContract",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_to",
            "type": "address"
          },
          {
            "name": "_tokenId",
            "type": "uint256"
          }
        ],
        "name": "mint",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_from",
            "type": "address"
          },
          {
            "name": "_to",
            "type": "address"
          },
          {
            "name": "_tokenId",
            "type": "uint256"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_tokenId",
            "type": "uint256"
          }
        ],
        "name": "exists",
        "outputs": [
          {
            "name": "_exists",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_index",
            "type": "uint256"
          }
        ],
        "name": "tokenByIndex",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_address",
            "type": "address"
          },
          {
            "name": "_isShared",
            "type": "bool"
          },
          {
            "name": "_linked",
            "type": "bool"
          }
        ],
        "name": "setSharingWith",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_address",
            "type": "address"
          }
        ],
        "name": "setCardPackageContract",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_tokenId",
            "type": "uint256"
          }
        ],
        "name": "ownerOf",
        "outputs": [
          {
            "name": "_owner",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "name": "_balance",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "acceptOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_address",
            "type": "address"
          }
        ],
        "name": "setSettingsContract",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_operator",
            "type": "address"
          },
          {
            "name": "_approved",
            "type": "bool"
          }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_from",
            "type": "address"
          },
          {
            "name": "_to",
            "type": "address"
          },
          {
            "name": "_tokenId",
            "type": "uint256"
          },
          {
            "name": "_data",
            "type": "bytes"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_address",
            "type": "address"
          }
        ],
        "name": "setCardContract",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_owner",
            "type": "address"
          },
          {
            "name": "_operator",
            "type": "address"
          }
        ],
        "name": "isApprovedForAll",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "MintFodr",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "_metedata",
            "type": "uint256"
          }
        ],
        "name": "CreateCardBase",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "_to",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "_baseId",
            "type": "uint256"
          }
        ],
        "name": "MintCardWithBaseId",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "_cardId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "_burnedCardId",
            "type": "uint256"
          }
        ],
        "name": "UpgradeCard",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "packageId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "_packageType",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "_currency",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "price",
            "type": "uint256"
          }
        ],
        "name": "BuyPackage",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "_currency",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "_cardId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "_startPrice",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "_endPrice",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "_duration",
            "type": "uint256"
          }
        ],
        "name": "CreatAuction",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "_cardId",
            "type": "uint256"
          }
        ],
        "name": "CancelAuction",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "_cardId",
            "type": "uint256"
          }
        ],
        "name": "Bid",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "_to",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "_tokenId",
            "type": "uint256"
          }
        ],
        "name": "Mint",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "_tokenId",
            "type": "uint256"
          }
        ],
        "name": "Burn",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "_from",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "_to",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "_from",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "_to",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "_tokenId",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "_owner",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "_approved",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "_tokenId",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "_owner",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "_operator",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "_approved",
            "type": "bool"
          }
        ],
        "name": "ApprovalForAll",
        "type": "event"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_to",
            "type": "address"
          },
          {
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "mintFodr",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_metedata",
            "type": "uint256"
          }
        ],
        "name": "createCardBase",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_to",
            "type": "address"
          },
          {
            "name": "_baseId",
            "type": "uint256"
          }
        ],
        "name": "mintCardWithBaseId",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_cardId",
            "type": "uint256"
          },
          {
            "name": "_burnedCardId",
            "type": "uint256"
          }
        ],
        "name": "upgradeCard",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_packageType",
            "type": "uint256"
          },
          {
            "name": "_currency",
            "type": "uint256"
          }
        ],
        "name": "buyPackage",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_currency",
            "type": "uint256"
          },
          {
            "name": "_cardId",
            "type": "uint256"
          },
          {
            "name": "_startPrice",
            "type": "uint256"
          },
          {
            "name": "_endPrice",
            "type": "uint256"
          },
          {
            "name": "_duration",
            "type": "uint256"
          }
        ],
        "name": "createAuction",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_cardId",
            "type": "uint256"
          }
        ],
        "name": "cancelAuction",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_cardId",
            "type": "uint256"
          }
        ],
        "name": "bid",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      }
    ],
);


metamaskContractAdaptor.on(MetamaskContractAdaptor.FOUND_METAMASK, function () {
    console.log(MetamaskContractAdaptor.FOUND_METAMASK + ' event triggered.')
})
metamaskContractAdaptor.on(MetamaskContractAdaptor.NOT_FOUND_METAMASK, function () {
    console.log(MetamaskContractAdaptor.NOT_FOUND_METAMASK + ' event triggered.')
})

metamaskContractAdaptor.on(MetamaskContractAdaptor.ENABLED_PERMISSION_TO_ACCESS_ACCOUNTS, function () {
    console.log(MetamaskContractAdaptor.ENABLED_PERMISSION_TO_ACCESS_ACCOUNTS + ' event triggered.')
})
metamaskContractAdaptor.on(MetamaskContractAdaptor.HAS_NOT_PERMISSION_TO_ACCESS_ACCOUNTS, function () {
    console.log(MetamaskContractAdaptor.HAS_NOT_PERMISSION_TO_ACCESS_ACCOUNTS + ' event triggered.')
})

metamaskContractAdaptor.on(MetamaskContractAdaptor.WRONG_NETWORK, function () {
    console.log(MetamaskContractAdaptor.WRONG_NETWORK + ' event triggered.')
})

metamaskContractAdaptor.on(MetamaskContractAdaptor.ACCOUNTS_CHANGED, function (accounts) {
    console.log(MetamaskContractAdaptor.ACCOUNTS_CHANGED + ' event triggered. Accounts: ', accounts)
})

metamaskContractAdaptor.on(MetamaskContractAdaptor.CHAIN_CHANGED, function (chainId) {
    console.log(MetamaskContractAdaptor.CHAIN_CHANGED + ' event triggered. ChainId: ', chainId)
})


metamaskContractAdaptor.on(MetamaskContractAdaptor.CONNECTED, function (cnnectInfo) {
    console.log(MetamaskContractAdaptor.CONNECTED + ' event triggered. ConnectInfo: ', cnnectInfo)
})

metamaskContractAdaptor.on(MetamaskContractAdaptor.DISCONNECTED, function (error) {
    console.log(MetamaskContractAdaptor.DISCONNECTED + ' event triggered. Error: ', error)
})

metamaskContractAdaptor.on(MetamaskContractAdaptor.ALREADY_METHOD_TRIGGERED, function (method) {
    console.log(MetamaskContractAdaptor.ALREADY_METHOD_TRIGGERED + ' event triggered. Method: ' + method)
})

metamaskContractAdaptor.on(MetamaskContractAdaptor.METHOD_CANCELLED, function (method) {
    console.log(MetamaskContractAdaptor.METHOD_CANCELLED + ' event triggered. Method: ' + method)
});

let wind = (window as any);
wind.metamaskContractAdaptor = metamaskContractAdaptor;

wind.checkMetamask = async function () {
    var result = await metamaskContractAdaptor.checkMetamask()
    console.log("checkMetamask : " + result)
}

wind.checkNetwork = async function () {
    var result = await metamaskContractAdaptor.checkNetwork()
    console.log("checkNetwork : " + result)
}

wind.checkPermissionToAccessAccounts = async function () {
    var result = await metamaskContractAdaptor.checkPermissionToAccessAccounts()
    console.log("checkPermissionToAccessAccounts : " + result)
}

wind.checkConnection = async function () {
    var result = await metamaskContractAdaptor.checkConnection()
    console.log("checkConnection : " + result)
}

wind.enablePermissionToAccessAccounts = async function () {
    var result = await metamaskContractAdaptor.enablePermissionToAccessAccounts()
    console.log("enablePermissionToAccessAccounts : " + result)
}

wind.sign = async function () {
    try {
        var result = await metamaskContractAdaptor.sign("Tested message.", "pass")
        console.log("signed message: " + result);
    } catch(error) {
        console.log(error)
    }
}

wind.getSelectedChainId = async function () {
    var result = await metamaskContractAdaptor.getSelectedChainId()
    console.log("getSelectedChainId : " + result)
}

wind.getSelectedAddress = async function () {
    var result = await metamaskContractAdaptor.getSelectedAddress()
    console.log("getSelectedAddress : " + result)
}

wind.getFordBudget = async function () {
    var result = await metamaskContractAdaptor.getFordBudget()
    console.log("getFordBudget : " + result)
}

wind.getWarcBudget = async function () {
    var result = await metamaskContractAdaptor.getWarcBudget()
    console.log("getWarcBudget : " + result)
}

