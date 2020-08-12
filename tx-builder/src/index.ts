import { providers } from 'ethers'
import { initConfiguration } from './contracts/configuration'
import { Network } from './types'

export class TxBuilder {

  /**
   * Initiates this package with the `injectedProvider` (e.g. Metamask) on `network` (e.g. mainnet)
   * @param injectedProvider The web3 provider. For Metamask this should be `web3.givenProvider` which has been 'connected'
   * @param network The network name (mainnet / ropsten / kovan)
   */
  constructor(injectedProvider: providers.ExternalProvider, network: Network) {
    let networkToUse = network
    if (!injectedProvider) throw Error('No web3 provider given');
    if (!network) networkToUse = Network.mainnet;
    initConfiguration(injectedProvider, network);
  }
}

export * from './contracts/LendingPool'