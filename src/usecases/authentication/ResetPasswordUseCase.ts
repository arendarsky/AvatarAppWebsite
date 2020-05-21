import { IBaseUseCase } from '../BaseUseCase';
import {UserEntity, IEmailConfirmation} from '@/entities/User';
import ErrorService from '@/services/ErrorService';

export interface IResetPasswordUseCase {
  user: UserEntity;
  errorService: ErrorService;
}

export default class ResetPasswordUseCase implements IBaseUseCase {
  private user: UserEntity;
  private errorService: ErrorService;

  constructor({ user, errorService }: IResetPasswordUseCase) {
    this.user = user;
    this.errorService = errorService;
  }

  public async execute(email: string) {
    try {
      await this.user.sendPasswordReset(email);
    } catch (e) {
      await this.errorService.handle(e);
    }
  }
}
