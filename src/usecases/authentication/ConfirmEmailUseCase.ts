import { IBaseUseCase } from '../BaseUseCase';
import {UserEntity, IEmailConfirmation} from '@/entities/User';
import ErrorService from '@/services/ErrorService';

export interface IConfirmEmailUseCase {
  user: UserEntity;
  errorService: ErrorService;
}

export default class ConfirmEmailUseCase implements IBaseUseCase {
  private user: UserEntity;
  private errorService: ErrorService;

  constructor({ user, errorService }: IConfirmEmailUseCase) {
    this.user = user;
    this.errorService = errorService;
  }

  public async execute(confirmation: IEmailConfirmation): Promise<boolean | null> {
    try {
      return await this.user.confirmEmail(confirmation);
    } catch (e) {
      await this.errorService.handle(e);
      return null;
    }
  }
}
