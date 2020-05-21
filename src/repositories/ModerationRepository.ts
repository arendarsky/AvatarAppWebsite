import { IBaseRepository } from './BaseRepository';
import {ApiClient} from '@/network/ApiClient';
import store from '@/store';
import {Stop, StoreQueue} from '@/store/modules/moderation/types';
import {AdminApi} from '@/network/api/Admin';
import {IModerationItem} from '@/entities/Moderation';

export default class ModerationRepository implements IBaseRepository {
  constructor() { }

  public async fetchItem(): Promise<any> {
    return;
  }

  public async fetchItems(number: number): Promise<IModerationItem[]> {
    return await ApiClient.shared.request(new AdminApi.GetVideos(number));
  }

  public saveItems(items: IModerationItem[]) {
    if (items.length === 0) {
      store.commit(new Stop());
      return;
    }
    store.commit(new StoreQueue(items));
  }

  public getItem(): IModerationItem | null {
    return store.state.moderation.activeItem;
  }

}
