import { tEthereumAddress } from '../types'

export default interface AddressModel {
  ADDRESS_PROVIDER_ADDRESS: tEthereumAddress;
  LENDINGPOOL_ADDRESS: tEthereumAddress;
  LENDINGPOOL_CORE_ADDRESS: tEthereumAddress;
  PRICE_ORACLE_ADDRESS: tEthereumAddress;
  WALLET_PROVIDER: tEthereumAddress;
}