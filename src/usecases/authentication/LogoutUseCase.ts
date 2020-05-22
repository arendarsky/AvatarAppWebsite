import { IBaseUseCase } from '../BaseUseCase';
import { UserEntity } from '@/entities/User';
import ErrorService from '@/services/ErrorService';

export interface ILogoutUseCase {
  user: UserEntity;
  errorService: ErrorService;
}

export default class LogoutUseCase implements IBaseUseCase {
  public user: UserEntity;
  public errorService: ErrorService;

  constructor({ user, errorService }: ILogoutUseCase) {
    this.user = user;
    this.errorService = errorService;
  }

  public async execute() {
    try {
      this.user.logout();
    } catch (e) {
      await this.errorService.handle(e);
    }
  }
}
