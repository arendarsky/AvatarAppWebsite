import ErrorService from '@/services/ErrorService';
import {IBaseUseCase} from '@/usecases/BaseUseCase';
import {PrivateProfileEntity} from '@/entities/PrivateProfile';

export interface ISendVideoToCastingUseCase {
  privateProfileEntity: PrivateProfileEntity;
  errorService: ErrorService;
}

export default class SendVideoToCastingUseCase implements IBaseUseCase {
  private privateProfileEntity: PrivateProfileEntity;
  private errorService: ErrorService;

  constructor({privateProfileEntity, errorService}: ISendVideoToCastingUseCase) {
    this.privateProfileEntity = privateProfileEntity;
    this.errorService = errorService;
  }

  public async execute(fileName: string) {
    try {
      await this.privateProfileEntity.sendVideoToCasting(fileName);
    } catch (e) {
      await this.errorService.handle(e);
    }
  }
}
