import { IBaseUseCase } from '../BaseUseCase';
import {UserEntity, IEmailConfirmation} from '@/entities/User';
import ErrorService from '@/services/ErrorService';

export interface ISendEmailConfirmationUseCase {
  user: UserEntity;
  errorService: ErrorService;
}

export default class SendEmailConfirmationUseCase implements IBaseUseCase {
  private user: UserEntity;
  private errorService: ErrorService;

  constructor({ user, errorService }: ISendEmailConfirmationUseCase) {
    this.user = user;
    this.errorService = errorService;
  }

  public async execute(email: string) {
    try {
      await this.user.sendEmailConfirmation(email);
    } catch (e) {
      await this.errorService.handle(e);
    }
  }
}
