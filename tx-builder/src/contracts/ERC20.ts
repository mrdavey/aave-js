import { Contract } from 'ethers'
import { getSignerAndConnectContract } from './helpers'
import { getConfiguration } from './configuration'
import { tEthereumAddress } from '../types'
import ERC20Abi from './abis/ERC20.json'

class ERC20 {
  private erc20Token: Contract
  
  constructor(address: tEthereumAddress) {
    this.erc20Token = new Contract(address, ERC20Abi, getConfiguration().web3)
  }

  async getAllowance(userAddress: tEthereumAddress) {
    const { contract, user } = await getSignerAndConnectContract(this.erc20Token)
    return await this.erc20Token.allowance()
  }
  // get approval

  // set approval

  // get balance
}