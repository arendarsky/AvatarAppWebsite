import { IBaseUseCase } from '../BaseUseCase';
import {UserEntity, IPasswordChange} from '@/entities/User';
import ErrorService from '@/services/ErrorService';

export interface IChangePasswordUseCase {
  user: UserEntity;
  errorService: ErrorService;
}

export default class ChangePasswordUseCase implements IBaseUseCase {
  private user: UserEntity;
  private errorService: ErrorService;

  constructor({ user, errorService }: IChangePasswordUseCase) {
    this.user = user;
    this.errorService = errorService;
  }

  public async execute(passwordChange: IPasswordChange): Promise<boolean | null> {
    try {
      return await this.user.passwordChange(passwordChange);
    } catch (e) {
      await this.errorService.handle(e);
      return null;
    }
  }
}
