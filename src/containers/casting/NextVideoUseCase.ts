import { IBaseUseCase } from '@/usecases/BaseUseCase';
import ErrorService from '@/services/ErrorService';
import CastingEntity, {ILike} from '@/entities/Casting';
import {IBaseCastingUseCase} from '@/usecases/casting/BaseCastingUseCase';

export interface ICastingUseCase {
  casting: CastingEntity;
  errorService: ErrorService;
}

export default class NextVideoUseCase implements IBaseUseCase {
  public casting: CastingEntity;
  public errorService: ErrorService;

  constructor({ casting, errorService }: IBaseCastingUseCase) {
    this.casting = casting;
    this.errorService = errorService;
  }

  public async execute(like: ILike) {
    try {
      await this.casting.NextItem(like);
    } catch (e) {
      await this.errorService.handle(e);
    }
  }
}
