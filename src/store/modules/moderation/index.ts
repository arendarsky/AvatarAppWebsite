import { Module } from 'vuex';
import { IRootState } from '@/store';
import { mutations } from './mutations';
import { IModerationState, initialState } from './state';

export * from './state';

export const store: Module<IModerationState, IRootState> = {
  state: initialState,
  mutations,
};
