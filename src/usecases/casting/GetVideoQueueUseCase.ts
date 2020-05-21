import { IBaseUseCase } from '@/usecases/BaseUseCase';
import ErrorService from '@/services/ErrorService';
import CastingEntity, {ILike} from '@/entities/Casting';
import {IBaseCastingUseCase} from '@/usecases/casting/BaseCastingUseCase';

export default class GetVideoQueueUseCase implements IBaseUseCase {
  private casting: CastingEntity;
  private errorService: ErrorService;

  constructor({ casting, errorService }: IBaseCastingUseCase) {
    this.casting = casting;
    this.errorService = errorService;
  }

  public async execute() {
    try {
      await this.casting.LoadQueue();
    } catch (e) {
      await this.errorService.handle(e);
    }
  }
}
