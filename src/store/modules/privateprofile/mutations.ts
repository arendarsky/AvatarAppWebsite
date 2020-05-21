import { MutationTree } from 'vuex';
import {IPrivateProfileState, initialState} from './state';
import {Clear, StoreItem, Types} from './types';

export const mutations: MutationTree<IPrivateProfileState> = {
  [Types.STORE_ITEM]: (state, action: StoreItem) => {
    state.item = action.payload;
  },
  [Types.CLEAR]: (state, action: Clear) => {
    const initial = initialState();
    state.item = initial.item;
  },
};
