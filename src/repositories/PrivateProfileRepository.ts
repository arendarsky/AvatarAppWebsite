import { IBaseRepository } from './BaseRepository';
import { IPrivateProfile } from '@/entities/PrivateProfile';
import { ApiClient } from '@/network/ApiClient';
import {ProfileApi} from '@/network/api/Profile';
import {Clear, StoreItem} from '@/store/modules/privateprofile/types';
import store from '@/store';

export default class PrivateProfileRepository implements IBaseRepository {
    constructor() { }

    public async fetchItem(): Promise<IPrivateProfile> {
        return await ApiClient.shared.request(new ProfileApi.GetPrivateProfile());
    }

    public saveItem(item: IPrivateProfile) {
      store.commit(new StoreItem(item));
    }

    public clearItem() {
      store.commit(new Clear());
    }

    public getItem(): IPrivateProfile | null {
      return store.state.privateProfile.item;
    }
}
