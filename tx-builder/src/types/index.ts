import AddressModel from '../models/AddressModels'

export enum Market {
  main = 'main',
  uniswap = 'uniswap',
}

export enum Network {
  mainnet = 'mainnet',
  ropsten = 'ropsten',
  kovan = 'kovan'
}

export type tEthereumAddress = string;
export type tStringCurrencyUnits = string;
export type tBorrowRateMode = 1 | 2;

export type tCommonContractAddressBetweenMarkets = Pick<
  AddressModel,
  | 'PRICE_ORACLE_ADDRESS'
  | 'WALLET_PROVIDER'
>;

export type tDistinctContractAddressBetweenMarkets = Pick<
  AddressModel,
  | 'ADDRESS_PROVIDER_ADDRESS'
  | 'LENDINGPOOL_ADDRESS'
  | 'LENDINGPOOL_CORE_ADDRESS'
>;

export type tTransactionResult = {
  success: boolean,
  transactionHash: string
}