export const CONTRACT_ADDRESS = '0x39D9C0f74be3baBB41cC3704962256Ae4D1500b1';
export const CHAIN_ID = '10200';
export const CHAIN_ID_HEX = '0x27d8';

export const CHAIN_ADD_INFOS_MAINET = {
    "method": "wallet_addEthereumChain",
    "params": [
      {
        "chainId": "0x64",
        "chainName": "Gnosis",
        "rpcUrls": [
          "https://rpc.gnosischain.com"
        ],
        "iconUrls": [
          "https://xdaichain.com/fake/example/url/xdai.svg",
          "https://xdaichain.com/fake/example/url/xdai.png"
        ],
        "nativeCurrency": {
          "name": "xDAI",
          "symbol": "xDAI",
          "decimals": 18
        },
        "blockExplorerUrls": [
          "https://blockscout.com/poa/xdai/"
        ]
      }
    ]
};

export const CHAIN_ADD_INFOS_TESTNET = {
    "method": "wallet_addEthereumChain",
    "params": [
        {
        "chainId": "0x27d8",
        "chainName": "Gnosis Chiado Testnet",
        "rpcUrls": [
            "https://rpc.chiadochain.net"
        ],
        "iconUrls": [
            "https://xdaichain.com/fake/example/url/xdai.svg",
            "https://xdaichain.com/fake/example/url/xdai.png"
        ],
        "nativeCurrency": {
            "name": "xDAI",
            "symbol": "xDAI",
            "decimals": 18
        },
        "blockExplorerUrls": [
            "https://blockscout.chiadochain.net"
        ]
        }
    ]
};