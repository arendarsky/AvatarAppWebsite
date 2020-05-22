import store from '@/store';
import {Next} from '@/store/modules/moderation/types';
import {ICastingItem, ILike} from '@/entities/Casting';
import ModerationRepository from '@/repositories/ModerationRepository';
import ModerationService from '@/services/ModerationService';

export interface IModerationItem extends ICastingItem {
  email: string;
}

export default class ModerationEntity {
  private repository: ModerationRepository;
  private moderationService: ModerationService;
  private fetchedNumber: number = 30;

  constructor() {
    this.repository = new ModerationRepository();
    this.moderationService = new ModerationService();
  }

  public async LoadQueue() {
    const newQueue = await this.repository.fetchItems(this.fetchedNumber);
    this.repository.saveItems(newQueue);
  }

  public async NextItem(like: ILike) {
    await this.moderationService.handle(like);
    store.commit(new Next());
    if (this.repository.getItem() == null) {
      this.LoadQueue();
    }
  }
}
