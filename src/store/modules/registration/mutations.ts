import {MutationTree} from 'vuex';
import {IRegistrationState, initialState} from './state';
import {Types} from './types';

export const mutations: MutationTree<IRegistrationState> = {
  [Types.SUCCESS]: (state) => {
    state.isSuccess = true;
  },
  [Types.FAILED]: (state) => {
    state.isSuccess = false;
  },
  [Types.CLEAR]: (state) => {
    const initial = initialState();
    state.isSuccess = initial.isSuccess;
  },
};
