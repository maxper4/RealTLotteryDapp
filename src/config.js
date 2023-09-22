import { Goerli } from "@usedapp/core";
import { getDefaultProvider } from 'ethers'

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]:
    getDefaultProvider('goerli'),
  },
};
