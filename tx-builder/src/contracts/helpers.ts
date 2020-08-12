import { Contract } from 'ethers'
import { getConfiguration } from './configuration'
import { tEthereumAddress } from '../types'

type connectedReturnValue = {
  contract: Contract,
  user: tEthereumAddress
}

/**
 * @internal
 * Checks that the web3 signer is valid and creates LendingPool with signer attached
 */
export async function getSignerAndConnectContract(contract: Contract): Promise<connectedReturnValue> {
  const signer = getConfiguration().web3.getSigner()
  const address = await signer.getAddress()
  if (!address) throw Error('No signer/address connected')
  return { contract: contract.connect(signer), user: address }
}