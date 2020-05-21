import ErrorService from '@/services/ErrorService';
import {IBaseUseCase} from '@/usecases/BaseUseCase';
import PrivateProfileRepository from '@/repositories/PrivateProfileRepository';

export interface ILoadContainerUseCase {
  repository: PrivateProfileRepository;
  errorService: ErrorService;
}

export default class LoadContainerUseCase implements IBaseUseCase {
  public repository: PrivateProfileRepository;
  public errorService: ErrorService;

  constructor({repository, errorService}: ILoadContainerUseCase) {
    this.repository = repository;
    this.errorService = errorService;
  }

  public async execute() {
    try {
      const data = await this.repository.fetchItem();
      this.repository.saveItem(data);
    } catch (e) {
      await this.errorService.handle(e);
    }
  }
}
