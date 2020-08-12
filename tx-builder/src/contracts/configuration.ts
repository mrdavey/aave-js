import { providers, Signer } from 'ethers'
import ConfigurationModel from '../models/ConfigurationModel';
import { getAddressByMarketAndNetwork } from './addresses';
import { Market, Network } from '../types';

type tGetConfiguration = () => ConfigurationModel;

export let configuration: ConfigurationModel;

export const getConfiguration: tGetConfiguration = () => {
  if (!configuration) throw Error('TxBuilder has not be initiated yet!')
  return configuration;
}

export const initConfiguration = (injectedProvider: providers.ExternalProvider, network: Network) => {
  try {
    const provider = new providers.Web3Provider(injectedProvider, network);
    configuration = {
      network,
      web3: provider,
      addresses: (market: Market) => getAddressByMarketAndNetwork(network, market)
    };
  
    return configuration;
  } catch (e) {
    throw Error(`Could not initialise configuration: ${e.message}`)
  }

};