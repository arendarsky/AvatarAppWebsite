import ErrorService from '@/services/ErrorService';
import {IBaseUseCase} from '@/usecases/BaseUseCase';
import {PrivateProfileEntity} from '@/entities/PrivateProfile';

export interface IRemoveVideoUseCase {
  privateProfileEntity: PrivateProfileEntity;
  errorService: ErrorService;
}

export default class RemoveVideoUseCase implements IBaseUseCase {
  private privateProfileEntity: PrivateProfileEntity;
  private errorService: ErrorService;

  constructor({privateProfileEntity, errorService}: IRemoveVideoUseCase) {
    this.privateProfileEntity = privateProfileEntity;
    this.errorService = errorService;
  }

  public async execute(fileName: string) {
    try {
      await this.privateProfileEntity.removeVideo(fileName);
    } catch (e) {
      await this.errorService.handle(e);
    }
  }
}
