import ErrorService from '@/services/ErrorService';
import {IBaseUseCase} from '@/usecases/BaseUseCase';
import ModerationRepository from '@/repositories/ModerationRepository';

export interface ILoadContainerUseCase {
  moderationRepository: ModerationRepository;
  errorService: ErrorService;
  number: number;
}

export default class LoadContainerUseCase implements IBaseUseCase {
  public moderationRepository: ModerationRepository;
  public errorService: ErrorService;
  public number: number;

  constructor({moderationRepository, errorService, number}: ILoadContainerUseCase) {
    this.moderationRepository = moderationRepository;
    this.errorService = errorService;
    this.number = number;
  }

  public async execute() {
    try {
      if (this.moderationRepository.getItem() != null){
        return;
      }
      const data = await this.moderationRepository.fetchItems(this.number);
      this.moderationRepository.saveItems(data);
    } catch (e) {
      await this.errorService.handle(e);
    }
  }
}
