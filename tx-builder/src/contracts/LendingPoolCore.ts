import { Contract } from 'ethers'
import { getConfiguration } from './configuration'
import { tEthereumAddress } from '../types'
import LendingPoolCoreAbi from './abis/LendingPoolCore.json'

class LendingPoolCore {
  private lendingPoolCoreContract: Contract

  constructor(lendingPoolCore: tEthereumAddress) {
    this.lendingPoolCoreContract = new Contract(lendingPoolCore, LendingPoolCoreAbi, getConfiguration().web3)
  }

  async getReserveDecimals(reserve: tEthereumAddress): Promise<number> {
    return await this.lendingPoolCoreContract.getReserveDecimals(reserve)
  }
}

export default LendingPoolCore
