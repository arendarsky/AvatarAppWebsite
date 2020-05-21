import { Module } from 'vuex';
import { IRootState } from '@/store';
import { mutations } from './mutations';
import { IRegistrationState, initialState } from './state';

export * from './state';

export const store: Module<IRegistrationState, IRootState> = {
    state: initialState,
    mutations,
};
