import ErrorService from '@/services/ErrorService';
import {IBaseUseCase} from '@/usecases/BaseUseCase';
import {PrivateProfileEntity} from '@/entities/PrivateProfile';

export interface ISaveProfileUseCase {
  privateProfileEntity: PrivateProfileEntity;
  errorService: ErrorService;
}

export default class SaveProfileUseCase implements IBaseUseCase {
  public privateProfileEntity: PrivateProfileEntity;
  public errorService: ErrorService;

  constructor({privateProfileEntity, errorService}: ISaveProfileUseCase) {
    this.privateProfileEntity = privateProfileEntity;
    this.errorService = errorService;
  }

  public async execute(params: {description: string, name: string}) {
    try {
      await this.privateProfileEntity.saveProfile(params.name, params.description);
    } catch (e) {
      await this.errorService.handle(e);
    }
  }
}
