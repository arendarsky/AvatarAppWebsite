import { Module } from 'vuex';
import { IRootState } from '@/store';
import { mutations } from './mutations';
import { IPrivateProfileState, initialState } from './state';

export * from './state';

export const store: Module<IPrivateProfileState, IRootState> = {
  state: initialState,
  mutations,
};
