import Vue from 'vue';
import Vuex from 'vuex';

// modules
import * as user from '@/store/modules/user';
import * as casting from '@/store/modules/casting';
import * as rating from '@/store/modules/rating';
import * as privateProfile from '@/store/modules/privateprofile';
import * as moderation from '@/store/modules/moderation';
import * as registration from '@/store/modules/registration';

Vue.use(Vuex);

export interface IRootState {
  user: user.IUserState;
  casting: casting.ICastingState;
  rating: rating.IRatingState;
  privateProfile: privateProfile.IPrivateProfileState;
  moderation: moderation.IModerationState;
  registration: registration.IRegistrationState;
}

export default new Vuex.Store<IRootState>({
  modules: {
    user: user.store,
    casting: casting.store,
    rating: rating.store,
    privateProfile: privateProfile.store,
    moderation: moderation.store,
    registration: registration.store,
  },
});
