// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, Vec } from '@polkadot/types';
import type { AccountId, Balance } from '@reef-defi/types/interfaces/runtime';
import type { EraIndex } from '@polkadot/types/interfaces/staking';

/** @name BondingLedger */
export interface BondingLedger extends Struct {
  readonly total: Balance;
  readonly active: Balance;
  readonly unlocking: Vec<HomaUnlockChunk>;
}

/** @name HomaUnlockChunk */
export interface HomaUnlockChunk extends Struct {
  readonly value: Balance;
  readonly era: EraIndex;
}

/** @name NomineeId */
export interface NomineeId extends AccountId {}

export type PHANTOM_NOMINEESELECTION = 'nomineesElection';
