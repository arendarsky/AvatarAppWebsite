import { IBaseUseCase } from "@/usecases/BaseUseCase"
import ErrorService from "@/services/ErrorService"
import CastingEntity, {ILike} from '@/entities/Casting';
import {IBaseCastingUseCase} from '@/usecases/casting/BaseCastingUseCase';

export default class GetVideoQueueUseCase implements IBaseUseCase {
  casting: CastingEntity;
  errorService: ErrorService;

  constructor({ casting, errorService }: IBaseCastingUseCase) {
    this.casting = casting;
    this.errorService = errorService;
  }

  async execute() {
    try {
      await this.casting.LoadQueue();
    } catch (e) {
      await this.errorService.handle(e);
    }
  }
}
