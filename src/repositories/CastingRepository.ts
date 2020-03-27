import { IBaseRepository } from "./BaseRepository"
import {ICastingItem} from '@/entities/Casting';
import {ApiClient} from '@/network/ApiClient';
import {CastingApi} from '@/network/api/Casting';
import store from '@/store';
import {StoreQueue} from '@/store/modules/casting/types';

export default class CastingRepository implements IBaseRepository {
  constructor() { }

  async fetchItem(): Promise<any>{
    return;
  }

  async fetchItems(number: number): Promise<Array<ICastingItem>>{
    return await ApiClient.shared.request(new CastingApi.GetUnwatched(number));
  }

  saveItems(items: Array<ICastingItem>) {
    store.commit(new StoreQueue(items));
  }
}
