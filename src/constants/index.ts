import { ChainId } from '../enums'
import JSBI from 'jsbi'

export * from './addresses'
export * from './kashi'
export * from './natives'
export * from './numbers'
export * from './tokens'

// export const INIT_CODE_HASH: string = '0x18bd384763faf17975e3810c73fb146f8bbfb29d7818453eb54e5e1504e2e2a5'

export const INIT_CODE_HASH: { [chainId: number]: string } = {
  [ChainId.MAINNET]: '0x18bd384763faf17975e3810c73fb146f8bbfb29d7818453eb54e5e1504e2e2a5',
  [ChainId.ROPSTEN]: '0x18bd384763faf17975e3810c73fb146f8bbfb29d7818453eb54e5e1504e2e2a5',
  [ChainId.RINKEBY]: '0x18bd384763faf17975e3810c73fb146f8bbfb29d7818453eb54e5e1504e2e2a5',
  [ChainId.GÖRLI]: '0x18bd384763faf17975e3810c73fb146f8bbfb29d7818453eb54e5e1504e2e2a5',
  [ChainId.KOVAN]: '0x18bd384763faf17975e3810c73fb146f8bbfb29d7818453eb54e5e1504e2e2a5',
  [ChainId.FANTOM]: '0x18bd384763faf17975e3810c73fb146f8bbfb29d7818453eb54e5e1504e2e2a5',
  [ChainId.MATIC]: '0x18bd384763faf17975e3810c73fb146f8bbfb29d7818453eb54e5e1504e2e2a5',
  [ChainId.MATIC_TESTNET]: '0x18bd384763faf17975e3810c73fb146f8bbfb29d7818453eb54e5e1504e2e2a5',
  [ChainId.XDAI]: '0x18bd384763faf17975e3810c73fb146f8bbfb29d7818453eb54e5e1504e2e2a5',
  [ChainId.BSC]: '0x18bd384763faf17975e3810c73fb146f8bbfb29d7818453eb54e5e1504e2e2a5',
  [ChainId.BSC_TESTNET]: '0x18bd384763faf17975e3810c73fb146f8bbfb29d7818453eb54e5e1504e2e2a5',
  [ChainId.ARBITRUM]: '0x18bd384763faf17975e3810c73fb146f8bbfb29d7818453eb54e5e1504e2e2a5',
  [ChainId.MOONBEAM_TESTNET]: '0x18bd384763faf17975e3810c73fb146f8bbfb29d7818453eb54e5e1504e2e2a5',
  [ChainId.AVALANCHE]: '0x18bd384763faf17975e3810c73fb146f8bbfb29d7818453eb54e5e1504e2e2a5',
  [ChainId.AVALANCHE_TESTNET]: '0x18bd384763faf17975e3810c73fb146f8bbfb29d7818453eb54e5e1504e2e2a5',
  [ChainId.HECO]: '0x18bd384763faf17975e3810c73fb146f8bbfb29d7818453eb54e5e1504e2e2a5',
  [ChainId.HECO_TESTNET]: '0x18bd384763faf17975e3810c73fb146f8bbfb29d7818453eb54e5e1504e2e2a5',
  [ChainId.HARMONY]: '0x18bd384763faf17975e3810c73fb146f8bbfb29d7818453eb54e5e1504e2e2a5',
  [ChainId.HARMONY_TESTNET]: '0x18bd384763faf17975e3810c73fb146f8bbfb29d7818453eb54e5e1504e2e2a5',
  [ChainId.OKEX]: '0x18bd384763faf17975e3810c73fb146f8bbfb29d7818453eb54e5e1504e2e2a5',
  [ChainId.OKEX_TESTNET]: '0x18bd384763faf17975e3810c73fb146f8bbfb29d7818453eb54e5e1504e2e2a5',
  [ChainId.CELO]: '0x18bd384763faf17975e3810c73fb146f8bbfb29d7818453eb54e5e1504e2e2a5',
  [ChainId.PALM]: '0x18bd384763faf17975e3810c73fb146f8bbfb29d7818453eb54e5e1504e2e2a5',
  [ChainId.MOONRIVER]: '0x18bd384763faf17975e3810c73fb146f8bbfb29d7818453eb54e5e1504e2e2a5',
  [ChainId.FUSE]: '0x1901958ef8b470f2c0a3875a79ee0bd303866d85102c0f1ea820d317024d50b5'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

export const LAMBDA_URL = 'https://9epjsvomc4.execute-api.us-east-1.amazonaws.com/dev'

export const SOCKET_URL = 'wss://hfimt374ge.execute-api.us-east-1.amazonaws.com/dev'
