import { IBaseUseCase } from '@/usecases/BaseUseCase';
import ErrorService from '@/services/ErrorService';
import CastingEntity, {ILike} from '@/entities/Casting';
import {IBaseCastingUseCase} from '@/usecases/casting/BaseCastingUseCase';
import ModerationEntity from '@/entities/Moderation';

export interface INextVideoUseCase {
  moderation: ModerationEntity;
  errorService: ErrorService;
}

export default class NextVideoUseCase implements IBaseUseCase {
  public moderation: ModerationEntity;
  public errorService: ErrorService;

  constructor({ moderation, errorService }: INextVideoUseCase) {
    this.moderation = moderation;
    this.errorService = errorService;
  }

  public async execute(like: ILike) {
    try {
      await this.moderation.NextItem(like);
    } catch (e) {
      await this.errorService.handle(e);
    }
  }
}
