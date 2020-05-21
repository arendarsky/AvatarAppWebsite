import { MutationTree } from 'vuex';
import {IRatingState, initialState} from './state';
import {Clear, StoreItems, Types} from './types';

export const mutations: MutationTree<IRatingState> = {
  [Types.STORE_ITEMS]: (state, action: StoreItems) => {
    state.items = action.payload;
  },
  [Types.CLEAR]: (state, action: Clear) => {
    const initial = initialState();
    state.items = initial.items;
  },
};
