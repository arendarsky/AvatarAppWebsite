import { IBaseRepository } from './BaseRepository';
import {ICastingItem} from '@/entities/Casting';
import {ApiClient} from '@/network/ApiClient';
import {CastingApi} from '@/network/api/Casting';
import store from '@/store';
import {Stop, StoreQueue} from '@/store/modules/casting/types';

export default class CastingRepository implements IBaseRepository {
  constructor() { }

  public async fetchItem(): Promise<any> {
    return;
  }

  public async fetchItems(number: number): Promise<ICastingItem[]> {
    return await ApiClient.shared.request(new CastingApi.GetUnwatched(number));
  }

  public saveItems(items: ICastingItem[]) {
    if (items.length === 0) {
      store.commit(new Stop());
      return;
    }
    store.commit(new StoreQueue(items));
  }

  public getItem(): ICastingItem | null {
    return store.state.casting.activeItem;
  }

}
