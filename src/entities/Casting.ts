import CastingRepository from '@/repositories/CastingRepository';
import store from '@/store';
import {Next, Stop, StoreQueue} from '@/store/modules/casting/types';
import LikeService from '@/services/LikeService';
import {IVideo} from '@/entities/Video';

export interface ICastingItem {
  id: number;
  name: string;
  description: string;
  profilePhoto: string;
  video: IVideo;
}

export interface ILike {
  name: string;
  isLike: boolean;
}

export default class CastingEntity {
  private repository: CastingRepository;
  private likeService: LikeService;
  private fetchedNumber: number = 30;

  constructor() {
    this.repository = new CastingRepository();
    this.likeService = new LikeService();
  }

  public async LoadQueue() {
    const newQueue = await this.repository.fetchItems(this.fetchedNumber);
    this.repository.saveItems(newQueue);
  }

  public async NextItem(like: ILike) {
    await this.likeService.handle(like);
    store.commit(new Next());
    if (this.repository.getItem() == null) {
      this.LoadQueue();
    }
  }
}
