import {MutationTree} from 'vuex';
import {IUserState, initialState} from './state';
import {Types, Login, Logout} from './types';

export const mutations: MutationTree<IUserState> = {
  [Types.LOGIN]: (state, action: Login) => {
    const token = action.payload;
    state.invalid = false;
    state.isConfirmed = true;
    state.userToken = token.token;
  },
  [Types.LOGOUT]: (state) => {
    state.userToken = null;
    state.invalid = false;
    state.isConfirmed = false;
  },
  [Types.INVALID]: (state) => {
    state.invalid = true;
  },
  [Types.CONFIRMED]: (state) => {
    state.isConfirmed = true;
  },
};
