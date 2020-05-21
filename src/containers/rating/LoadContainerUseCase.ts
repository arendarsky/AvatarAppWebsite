import ErrorService from '@/services/ErrorService';
import {IBaseUseCase} from '@/usecases/BaseUseCase';
import RatingRepository from '@/repositories/RatingRepository';

export interface ILoadContainerUseCase {
  ratingRepository: RatingRepository;
  errorService: ErrorService;
  number: number;
}

export default class LoadContainerUseCase implements IBaseUseCase {
  public ratingRepository: RatingRepository;
  public errorService: ErrorService;
  public number: number;

  constructor({ratingRepository, errorService, number}: ILoadContainerUseCase) {
    this.ratingRepository = ratingRepository;
    this.errorService = errorService;
    this.number = number;
  }

  public async execute() {
    try {
      const data = await this.ratingRepository.fetchItems(this.number);
      this.ratingRepository.saveItems(data);
    } catch (e) {
      await this.errorService.handle(e);
    }
  }
}
