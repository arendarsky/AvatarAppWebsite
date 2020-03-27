import { MutationTree } from "vuex"
import { IUserState, initialState } from "./state"
import { Types, Login, Logout } from "./types"

export const mutations: MutationTree<IUserState> = {
    [Types.LOGIN]: (state, action: Login) => {
        const token = action.payload;
        state.invalid = false;
        state.userToken = token.token;
    },
    [Types.LOGOUT]: (state) => {
        const initial = initialState();
        state.userToken = initial.userToken;
        state.invalid = initial.invalid;
    },
    [Types.INVALID]: (state) => {
        state.invalid = true;
    }
}
