import { Contract, utils } from 'ethers'
import { Market, tTransactionResult } from '../types'
import { getSignerAndConnectContract } from './helpers'
import { getConfiguration } from './configuration'
import { tEthereumAddress, tStringCurrencyUnits, tBorrowRateMode } from '../types'
import LendingPoolCore from './LendingPoolCore'
import LendingPoolAbi from './abis/LendingPool.json'

export class LendingPool {
  private lendingPoolContract: Contract;
  private lendingPoolCore: LendingPoolCore;

  /**
   * @param market The market used by the lendingPool
   */
  constructor(market: Market) {
    const config = getConfiguration()
    if (!config) throw Error('TxBuilder has not been initiated properly yet!')
    const { LENDINGPOOL_ADDRESS, LENDINGPOOL_CORE_ADDRESS } = config.addresses(market);
    this.lendingPoolContract = new Contract(LENDINGPOOL_ADDRESS, LendingPoolAbi, getConfiguration().web3)
    this.lendingPoolCore = new LendingPoolCore(LENDINGPOOL_CORE_ADDRESS)
  }

  /**
   * Borrow an `amount` of `reserve` asset.
   * @notice User must have a collaterised position (i.e. aTokens in their wallet)
   * @param reserve The ethereum address of the reserve asset
   * @param amount The amount to be borrowed, in human readable units (e.g. 2.5 ETH)
   * @param rateMode Whether the borrow will incur a stable or variable interest rate
   * @param refferalCode The referral code (See [our docs for more info](https://docs.aave.com/developers/integrating-aave/referral-program))
   */
  async borrow(
    reserve: tEthereumAddress,
    amount: tStringCurrencyUnits,
    rateMode: tBorrowRateMode, 
    refferalCode?: string
  ): Promise<tTransactionResult> {

    const { contract } = await getSignerAndConnectContract(this.lendingPoolContract)
    const reserveDecimals = await this.lendingPoolCore.getReserveDecimals(reserve)
    const formatAmount = utils.parseUnits(amount, reserveDecimals).toString()
    
    const tx = await contract.borrow(reserve, formatAmount, rateMode, refferalCode || 0);
    return {
      success: tx.receipt.status,
      transactionHash: tx.receipt.transactionHash
    }
  }

  async repay(
    reserve: tEthereumAddress,
    amount: tStringCurrencyUnits,
    onBehalfOf?: tEthereumAddress
  ): Promise<tTransactionResult> {

    // check erc20 approvals
    // approve if necessary
    // repay tx

  }

  // async swapBorrowRateMode() {

  // }

  // async deposit() {

  // }

  // async setUsageAsCollateral() {
    
  // }

  // async redeem() {

  // }

  // async liquidationCall() {

  // }

  // async getReserves() {
  //   return await this.lendingPoolContract.getReserves()
  // }

  // // admin only
  // async mint() {

  // }

}