import { IBaseRepository } from './BaseRepository';
import {ICastingItem} from '@/entities/Casting';
import {ApiClient} from '@/network/ApiClient';
import store from '@/store';
import {IRatingItem} from '@/entities/Rating';
import {RatingApi} from '@/network/api/Rating';
import {Clear, StoreItems} from '@/store/modules/rating/types';

export default class RatingRepository implements IBaseRepository {
  constructor() { }

  public async fetchItem(): Promise<any> {
    return;
  }

  public async fetchItems(number: number): Promise<IRatingItem[]> {
    return await ApiClient.shared.request(new RatingApi.GetTop(number));
  }

  public saveItems(items: IRatingItem[]) {
    store.commit(new StoreItems(items.filter((r) => r.video != null)));
  }

  public getItems(): IRatingItem[] {
    return store.state.rating.items;
  }

  public clearItems() {
    store.commit(new Clear());
  }
}
