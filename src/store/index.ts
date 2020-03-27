import Vue from 'vue';
import Vuex from 'vuex';

// modules
import * as user from '@/store/modules/user';
import * as casting from '@/store/modules/casting';

Vue.use(Vuex);

export interface IRootState {
  user: user.IUserState,
  casting: casting.ICastingState
}

export default new Vuex.Store<IRootState>({
  modules: {
    user: user.store,
    casting: casting.store
  }
});
