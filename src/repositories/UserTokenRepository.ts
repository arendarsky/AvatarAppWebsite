import { IBaseRepository } from "./BaseRepository"
import { IUserToken, IUserCredentials } from "@/entities/user"
import {Login, Logout, Invalid} from "@/store/modules/user/types"
import store from "@/store"
import { ApiClient } from "@/network/ApiClient"
import { UserApi } from "@/network/api/User"

export default class UserTokenRepository implements IBaseRepository {
    constructor() { }

    async fetchItem(credentials: IUserCredentials): Promise<IUserToken> {
        return await ApiClient.shared.request(new UserApi.GetToken(credentials));
    }

    saveItem(item: IUserToken) {
        if (item.token) {
            sessionStorage.setItem("user-token", item.token);
            store.commit(new Login(item));
            return;
        }
        store.commit(new Invalid());
    }

    async clearItem() {
        sessionStorage.removeItem("user-token");
        store.commit(new Logout());
    }
}
