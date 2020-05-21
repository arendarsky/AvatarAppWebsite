import CastingRepository from '@/repositories/CastingRepository';
import ErrorService from '@/services/ErrorService';
import {IBaseUseCase} from '@/usecases/BaseUseCase';

export interface ILoadContainerUseCase {
  castingRepository: CastingRepository;
  errorService: ErrorService;
  number: number;
}

export default class LoadContainerUseCase implements IBaseUseCase {
  public castingRepository: CastingRepository;
  public errorService: ErrorService;
  public number: number;

  constructor({castingRepository, errorService, number}: ILoadContainerUseCase) {
    this.castingRepository = castingRepository;
    this.errorService = errorService;
    this.number = number;
  }

  public async execute() {
    try {
      if (this.castingRepository.getItem() != null){
        return;
      }
      const data = await this.castingRepository.fetchItems(this.number);
      this.castingRepository.saveItems(data);
    } catch (e) {
      await this.errorService.handle(e);
    }
  }
}
