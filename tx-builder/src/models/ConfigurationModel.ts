import { providers, Signer } from 'ethers';
import AddressModel from './AddressModels';
import { Market } from '../types';

export default interface ConfigurationModel {
  network: string;
  web3: providers.Web3Provider;
  addresses: (market: Market) => AddressModel;
}