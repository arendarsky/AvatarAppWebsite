import { Module } from 'vuex';
import { IRootState } from '@/store';
import { mutations } from './mutations';
import { IRatingState, initialState } from './state';

export * from './state';

export const store: Module<IRatingState, IRootState> = {
  state: initialState,
  mutations,
};
