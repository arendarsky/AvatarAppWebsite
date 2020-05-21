import {IBaseUseCase} from '../BaseUseCase';
import {UserEntity, IUserCredentials, IRegistrationData} from '@/entities/User';
import ErrorService from '@/services/ErrorService';

export interface IRegisterUseCase {
  user: UserEntity;
  errorService: ErrorService;
}

export default class RegisterUseCAse implements IBaseUseCase {
  private user: UserEntity;
  private errorService: ErrorService;

  constructor({user, errorService}: IRegisterUseCase) {
    this.user = user;
    this.errorService = errorService;
  }

  public async execute(userData: IRegistrationData) {
    try {
      await this.user.register(userData);
    } catch (e) {
      await this.errorService.handle(e);
    }
  }
}
