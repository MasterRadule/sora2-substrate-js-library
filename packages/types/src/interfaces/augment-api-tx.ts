// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Compact, Text, Vec, bool, u32 } from '@polkadot/types';
import type { AnyNumber, ITuple } from '@polkadot/types/types';
import type { Extrinsic } from '@polkadot/types/interfaces/extrinsics';
import type { AccountId, AccountIdOf, AmountOf, AssetId, AssetIdOf, Balance, BalanceOf, Call, CurrencyIdOf, DEXId, FilterMode, FixedU128, LiquiditySourceType, LookupSource, Moment, SwapAmount } from '@sora-substrate/types/interfaces/runtime';
import type { ApiTypes, SubmittableExtrinsic } from '@polkadot/api/types';

declare module '@polkadot/api/types/submittable' {
  export interface AugmentedSubmittables<ApiType> {
    balances: {
      /**
       * Exactly as `transfer`, except the origin must be root and the source account may be
       * specified.
       * # <weight>
       * - Same as transfer, but additional read and write because the source account is
       * not assumed to be in the overlay.
       * # </weight>
       **/
      forceTransfer: AugmentedSubmittable<(source: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, LookupSource, Compact<Balance>]>;
      /**
       * Set the balances of a given account.
       * 
       * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
       * also decrease the total issuance of the system (`TotalIssuance`).
       * If the new free or reserved balance is below the existential deposit,
       * it will reset the account nonce (`frame_system::AccountNonce`).
       * 
       * The dispatch origin for this call is `root`.
       * 
       * # <weight>
       * - Independent of the arguments.
       * - Contains a limited number of reads and writes.
       * ---------------------
       * - Base Weight:
       * - Creating: 27.56 µs
       * - Killing: 35.11 µs
       * - DB Weight: 1 Read, 1 Write to `who`
       * # </weight>
       **/
      setBalance: AugmentedSubmittable<(who: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, newFree: Compact<Balance> | AnyNumber | Uint8Array, newReserved: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Compact<Balance>, Compact<Balance>]>;
      /**
       * Transfer some liquid free balance to another account.
       * 
       * `transfer` will set the `FreeBalance` of the sender and receiver.
       * It will decrease the total issuance of the system by the `TransferFee`.
       * If the sender's account is below the existential deposit as a result
       * of the transfer, the account will be reaped.
       * 
       * The dispatch origin for this call must be `Signed` by the transactor.
       * 
       * # <weight>
       * - Dependent on arguments but not critical, given proper implementations for
       * input config types. See related functions below.
       * - It contains a limited number of reads and writes internally and no complex computation.
       * 
       * Related functions:
       * 
       * - `ensure_can_withdraw` is always called internally but has a bounded complexity.
       * - Transferring balances to accounts that did not exist before will cause
       * `T::OnNewAccount::on_new_account` to be called.
       * - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
       * - `transfer_keep_alive` works the same way as `transfer`, but has an additional
       * check that the transfer will not kill the origin account.
       * ---------------------------------
       * - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
       * - DB Weight: 1 Read and 1 Write to destination account
       * - Origin account is already in memory, so no DB operations for them.
       * # </weight>
       **/
      transfer: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Compact<Balance>]>;
      /**
       * Same as the [`transfer`] call, but with a check that the transfer will not kill the
       * origin account.
       * 
       * 99% of the time you want [`transfer`] instead.
       * 
       * [`transfer`]: struct.Pallet.html#method.transfer
       * # <weight>
       * - Cheaper than transfer because account cannot be killed.
       * - Base Weight: 51.4 µs
       * - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
       * #</weight>
       **/
      transferKeepAlive: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Compact<Balance>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    currencies: {
      /**
       * Transfer some balance to another account under `currency_id`.
       * 
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       **/
      transfer: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: CurrencyIdOf | AnyNumber | Uint8Array, amount: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, CurrencyIdOf, Compact<BalanceOf>]>;
      /**
       * Transfer some native currency to another account.
       * 
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       **/
      transferNativeCurrency: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Compact<BalanceOf>]>;
      /**
       * update amount of account `who` under `currency_id`.
       * 
       * The dispatch origin of this call must be _Root_.
       **/
      updateBalance: AugmentedSubmittable<(who: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: CurrencyIdOf | AnyNumber | Uint8Array, amount: AmountOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, CurrencyIdOf, AmountOf]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    demeterFarmingPlatform: {
      /**
       * Add pool
       **/
      addPool: AugmentedSubmittable<(poolAsset: AssetIdOf | AnyNumber | Uint8Array, rewardAsset: AssetIdOf | AnyNumber | Uint8Array, isFarm: bool | boolean | Uint8Array, multiplier: u32 | AnyNumber | Uint8Array, depositFee: Balance | AnyNumber | Uint8Array, isCore: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetIdOf, AssetIdOf, bool, u32, Balance, bool]>;
      /**
       * Change info
       **/
      changeInfo: AugmentedSubmittable<(changedUser: AccountIdOf | string | Uint8Array, poolAsset: AssetIdOf | AnyNumber | Uint8Array, rewardAsset: AssetIdOf | AnyNumber | Uint8Array, isFarm: bool | boolean | Uint8Array, poolTokens: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountIdOf, AssetIdOf, AssetIdOf, bool, Balance]>;
      /**
       * Change pool deposit fee
       **/
      changePoolDepositFee: AugmentedSubmittable<(poolAsset: AssetIdOf | AnyNumber | Uint8Array, rewardAsset: AssetIdOf | AnyNumber | Uint8Array, isFarm: bool | boolean | Uint8Array, depositFee: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetIdOf, AssetIdOf, bool, Balance]>;
      /**
       * Change pool multiplier
       **/
      changePoolMultiplier: AugmentedSubmittable<(poolAsset: AssetIdOf | AnyNumber | Uint8Array, rewardAsset: AssetIdOf | AnyNumber | Uint8Array, isFarm: bool | boolean | Uint8Array, newMultiplier: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetIdOf, AssetIdOf, bool, u32]>;
      /**
       * Change token info
       **/
      changeTokenInfo: AugmentedSubmittable<(poolAsset: AssetIdOf | AnyNumber | Uint8Array, tokenPerBlock: Balance | AnyNumber | Uint8Array, farmsAllocation: Balance | AnyNumber | Uint8Array, stakingAllocation: Balance | AnyNumber | Uint8Array, teamAllocation: Balance | AnyNumber | Uint8Array, teamAccount: AccountIdOf | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetIdOf, Balance, Balance, Balance, Balance, AccountIdOf]>;
      /**
       * Change total tokens
       **/
      changeTotalTokens: AugmentedSubmittable<(poolAsset: AssetIdOf | AnyNumber | Uint8Array, rewardAsset: AssetIdOf | AnyNumber | Uint8Array, isFarm: bool | boolean | Uint8Array, totalTokens: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetIdOf, AssetIdOf, bool, Balance]>;
      /**
       * Deposit to pool
       **/
      deposit: AugmentedSubmittable<(poolAsset: AssetIdOf | AnyNumber | Uint8Array, rewardAsset: AssetIdOf | AnyNumber | Uint8Array, isFarm: bool | boolean | Uint8Array, pooledTokens: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetIdOf, AssetIdOf, bool, Balance]>;
      /**
       * Get rewards
       **/
      getRewards: AugmentedSubmittable<(poolAsset: AssetIdOf | AnyNumber | Uint8Array, rewardAsset: AssetIdOf | AnyNumber | Uint8Array, isFarm: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetIdOf, AssetIdOf, bool]>;
      /**
       * Register token for farming
       **/
      registerToken: AugmentedSubmittable<(poolAsset: AssetIdOf | AnyNumber | Uint8Array, tokenPerBlock: Balance | AnyNumber | Uint8Array, farmsAllocation: Balance | AnyNumber | Uint8Array, stakingAllocation: Balance | AnyNumber | Uint8Array, teamAllocation: Balance | AnyNumber | Uint8Array, teamAccount: AccountIdOf | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetIdOf, Balance, Balance, Balance, Balance, AccountIdOf]>;
      /**
       * Remove pool
       **/
      removePool: AugmentedSubmittable<(poolAsset: AssetIdOf | AnyNumber | Uint8Array, rewardAsset: AssetIdOf | AnyNumber | Uint8Array, isFarm: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetIdOf, AssetIdOf, bool]>;
      /**
       * Withdraw
       **/
      withdraw: AugmentedSubmittable<(poolAsset: AssetIdOf | AnyNumber | Uint8Array, rewardAsset: AssetIdOf | AnyNumber | Uint8Array, pooledTokens: Balance | AnyNumber | Uint8Array, isFarm: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetIdOf, AssetIdOf, Balance, bool]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    farming: {
      migrateTo11: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    irohaMigration: {
      migrate: AugmentedSubmittable<(irohaAddress: Text | string, irohaPublicKey: Text | string, irohaSignature: Text | string) => SubmittableExtrinsic<ApiType>, [Text, Text, Text]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    liquidityProxy: {
      /**
       * Perform swap of tokens (input/output defined via SwapAmount direction).
       * 
       * - `origin`: the account on whose behalf the transaction is being executed,
       * - `dex_id`: DEX ID for which liquidity sources aggregation is being done,
       * - `input_asset_id`: ID of the asset being sold,
       * - `output_asset_id`: ID of the asset being bought,
       * - `swap_amount`: the exact amount to be sold (either in input_asset_id or output_asset_id units with corresponding slippage tolerance absolute bound),
       * - `selected_source_types`: list of selected LiquiditySource types, selection effect is determined by filter_mode,
       * - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
       **/
      swap: AugmentedSubmittable<(dexId: DEXId | AnyNumber | Uint8Array, inputAssetId: AssetId | AnyNumber | Uint8Array, outputAssetId: AssetId | AnyNumber | Uint8Array, swapAmount: SwapAmount | { WithDesiredInput: any } | { WithDesiredOutput: any } | string | Uint8Array, selectedSourceTypes: Vec<LiquiditySourceType> | (LiquiditySourceType | 'XYKPool' | 'BondingCurvePool' | 'MulticollateralBondingCurvePool' | 'MockPool' | 'MockPool2' | 'MockPool3' | 'MockPool4' | 'XSTPool' | number | Uint8Array)[], filterMode: FilterMode | 'Disabled' | 'ForbidSelected' | 'AllowSelected' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [DEXId, AssetId, AssetId, SwapAmount, Vec<LiquiditySourceType>, FilterMode]>;
      /**
       * Perform swap of tokens (input/output defined via SwapAmount direction).
       * 
       * - `origin`: the account on whose behalf the transaction is being executed,
       * - `receiver`: the account that receives the output,
       * - `dex_id`: DEX ID for which liquidity sources aggregation is being done,
       * - `input_asset_id`: ID of the asset being sold,
       * - `output_asset_id`: ID of the asset being bought,
       * - `swap_amount`: the exact amount to be sold (either in input_asset_id or output_asset_id units with corresponding slippage tolerance absolute bound),
       * - `selected_source_types`: list of selected LiquiditySource types, selection effect is determined by filter_mode,
       * - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
       **/
      swapTransfer: AugmentedSubmittable<(receiver: AccountId | string | Uint8Array, dexId: DEXId | AnyNumber | Uint8Array, inputAssetId: AssetId | AnyNumber | Uint8Array, outputAssetId: AssetId | AnyNumber | Uint8Array, swapAmount: SwapAmount | { WithDesiredInput: any } | { WithDesiredOutput: any } | string | Uint8Array, selectedSourceTypes: Vec<LiquiditySourceType> | (LiquiditySourceType | 'XYKPool' | 'BondingCurvePool' | 'MulticollateralBondingCurvePool' | 'MockPool' | 'MockPool2' | 'MockPool3' | 'MockPool4' | 'XSTPool' | number | Uint8Array)[], filterMode: FilterMode | 'Disabled' | 'ForbidSelected' | 'AllowSelected' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, DEXId, AssetId, AssetId, SwapAmount, Vec<LiquiditySourceType>, FilterMode]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    referrals: {
      /**
       * Reserves the balance from the account for a special balance that can be used to pay referrals' fees
       **/
      reserve: AugmentedSubmittable<(balance: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Balance]>;
      /**
       * Sets the referrer for the account
       **/
      setReferrer: AugmentedSubmittable<(referrer: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Unreserves the balance and transfers it back to the account
       **/
      unreserve: AugmentedSubmittable<(balance: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Balance]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    timestamp: {
      /**
       * Set the current time.
       * 
       * This call should be invoked exactly once per block. It will panic at the finalization
       * phase, if this call hasn't been invoked by that time.
       * 
       * The timestamp should be greater than the previous one by the amount specified by
       * `MinimumPeriod`.
       * 
       * The dispatch origin for this call must be `Inherent`.
       * 
       * # <weight>
       * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
       * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in `on_finalize`)
       * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
       * # </weight>
       **/
      set: AugmentedSubmittable<(now: Compact<Moment> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<Moment>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    tradingPair: {
      /**
       * Register trading pair on the given DEX.
       * Can be only called by the DEX owner.
       * 
       * - `dex_id`: ID of the exchange.
       * - `base_asset_id`: base asset ID.
       * - `target_asset_id`: target asset ID.
       **/
      register: AugmentedSubmittable<(dexId: DEXId | AnyNumber | Uint8Array, baseAssetId: AssetId | AnyNumber | Uint8Array, targetAssetId: AssetId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [DEXId, AssetId, AssetId]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    vestedRewards: {
      claimCrowdloanRewards: AugmentedSubmittable<(assetId: AssetId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetId]>;
      /**
       * Claim all available PSWAP rewards by account signing this transaction.
       **/
      claimRewards: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Inject market makers snapshot into storage.
       **/
      injectMarketMakers: AugmentedSubmittable<(snapshot: Vec<ITuple<[AccountId, u32, Balance]>> | ([AccountId | string | Uint8Array, u32 | AnyNumber | Uint8Array, Balance | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[AccountId, u32, Balance]>>]>;
      /**
       * Allow/disallow a market making pair.
       **/
      setAssetPair: AugmentedSubmittable<(fromAssetId: AssetId | AnyNumber | Uint8Array, toAssetId: AssetId | AnyNumber | Uint8Array, marketMakingRewardsAllowed: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetId, AssetId, bool]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    xorFee: {
      /**
       * Update the multiplier for weight -> fee conversion.
       **/
      updateMultiplier: AugmentedSubmittable<(newMultiplier: FixedU128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [FixedU128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
  }

  export interface SubmittableExtrinsics<ApiType extends ApiTypes> extends AugmentedSubmittables<ApiType> {
    (extrinsic: Call | Extrinsic | Uint8Array | string): SubmittableExtrinsic<ApiType>;
    [key: string]: SubmittableModuleExtrinsics<ApiType>;
  }
}
