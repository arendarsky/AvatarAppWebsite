import {IBaseRepository} from './BaseRepository';
import {IUserToken, IUserCredentials} from '@/entities/user';
import {Login, Logout, Invalid} from '@/store/modules/user/types';
import store from '@/store';
import {ApiClient} from '@/network/ApiClient';
import {UserApi} from '@/network/api/User';

export default class UserTokenRepository implements IBaseRepository {

  public async fetchItem(credentials: IUserCredentials): Promise<IUserToken> {
    return await ApiClient.shared.request(new UserApi.GetToken(credentials));
  }

  public saveItem(item: IUserToken) {
    if (item.token) {
      localStorage.setItem('user-token', item.token);
      store.commit(new Login(item));
      return;
    }
    if (item.confirmationRequired) {
      store.commit(new Logout());
      return;
    }
    store.commit(new Invalid());
  }

  public clearItem() {
    localStorage.removeItem('user-token');
    store.commit(new Logout());
  }

  public getItem(): string | null {
    return store.state.user.userToken;
  }
}
