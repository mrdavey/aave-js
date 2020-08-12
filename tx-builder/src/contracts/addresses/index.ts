import { Market, Network, tCommonContractAddressBetweenMarkets, tDistinctContractAddressBetweenMarkets } from '../../types';
import AddressModel from '../../models/AddressModels';

const commonContractAddressBetweenMarkets: { [network: string]: tCommonContractAddressBetweenMarkets } = {
  [Network.kovan]: {
    PRICE_ORACLE_ADDRESS: '0x50913E8E1c650E790F8a1E741FF9B1B1bB251dfe',
    WALLET_PROVIDER: '0x1168ef1258eda89961aaee54d9dbb12e91f35237',
  },
  [Network.ropsten]: {
    PRICE_ORACLE_ADDRESS: '0x657372A559c30d236F011239fF9fbB6D76718271',
    WALLET_PROVIDER: '0x80b9ee334c1012bbcb0491d418cefc98d6927106',
  },
  [Network.mainnet]: {
    PRICE_ORACLE_ADDRESS: '0x76B47460d7F7c5222cFb6b6A75615ab10895DDe4',
    WALLET_PROVIDER: '0x73965fC127eEACB352E4cabe590B962aB446d5A5',
  },
}

const distinctContractAddressBetweenMarkets: { [pool: string]: { [network: string]: tDistinctContractAddressBetweenMarkets }} = {
  [Market.main]: {
    [Network.kovan]: {
      ADDRESS_PROVIDER_ADDRESS: '0x506b0b2cf20faa8f38a4e2b524ee43e1f4458cc5',
      LENDINGPOOL_ADDRESS: '0x580D4Fdc4BF8f9b5ae2fb9225D584fED4AD5375c',
      LENDINGPOOL_CORE_ADDRESS: '0x95D1189Ed88B380E319dF73fF00E479fcc4CFa45',
    },
    [Network.ropsten]: {
      ADDRESS_PROVIDER_ADDRESS: '0x1c8756fd2b28e9426cdbdcc7e3c4d64fa9a54728',
      LENDINGPOOL_ADDRESS: '0x9E5C7835E4b13368fd628196C4f1c6cEc89673Fa',
      LENDINGPOOL_CORE_ADDRESS: '0x4295Ee704716950A4dE7438086d6f0FBC0BA9472',
    },
    [Network.mainnet]: {
      ADDRESS_PROVIDER_ADDRESS: '0x24a42fd28c976a61df5d00d0599c34c4f90748c8',
      LENDINGPOOL_ADDRESS: '0x398eC7346DcD622eDc5ae82352F02bE94C62d119',
      LENDINGPOOL_CORE_ADDRESS: '0x3dfd23A6c5E8BbcFc9581d2E864a68feb6a076d3',
    },
  },
  [Market.uniswap]: {
    [Network.kovan]: {
      ADDRESS_PROVIDER_ADDRESS: '0xc786e9443f02817D9a09268C9E0918A54a8B25C1',
      LENDINGPOOL_ADDRESS: '0xcA0e40c2C807193A87241cFd93313708e2B46f62',
      LENDINGPOOL_CORE_ADDRESS: '0xc791D3d58d92672f79aF8E216C1E406B5Ba1198F',
    },
    [Network.ropsten]: {
      ADDRESS_PROVIDER_ADDRESS: '0x830853d3B904128A475CB663D9080Bc0678C4248',
      LENDINGPOOL_ADDRESS: '0x928EcAa4BDcDCb9785545a720e9F6F285E736c3d',
      LENDINGPOOL_CORE_ADDRESS: '0xF4b1CbD335d61A050fE1c963D76494E7628DbD25',
    },
    [Network.mainnet]: {
      ADDRESS_PROVIDER_ADDRESS: '0x7fd53085B9A29D236235D6FC593b47C9C33429F1',
      LENDINGPOOL_ADDRESS: '0x2F60C3EB259D63dcCa81fDE7Eaa216D9983D7C60',
      LENDINGPOOL_CORE_ADDRESS: '0x1012cfF81A1582ddD0616517eFB97D02c5c17E25',
    },
  }
}

export const getAddressByMarketAndNetwork = (
  network: string,
  market: Market,
): AddressModel => {
  const lowerCaseNetwork = network.toLowerCase();
  if (!distinctContractAddressBetweenMarkets[market]) {
    throw Error(`Invalid market ${market}`);
  }

  if (!distinctContractAddressBetweenMarkets[market][lowerCaseNetwork]) {
    throw Error(`Invalid network ${network}`);
  }

  return {
    ...distinctContractAddressBetweenMarkets[market][lowerCaseNetwork],
    ...commonContractAddressBetweenMarkets[lowerCaseNetwork]
  }
}