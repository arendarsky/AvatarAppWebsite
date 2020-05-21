import { IBaseUseCase } from '../BaseUseCase';
import { UserEntity, IUserCredentials } from '@/entities/User';
import ErrorService from '@/services/ErrorService';

export interface ILoginUseCase {
    user: UserEntity;
    errorService: ErrorService;
}

export default class LoginUseCase implements IBaseUseCase {
  private user: UserEntity;
  private errorService: ErrorService;

    constructor({ user, errorService }: ILoginUseCase) {
        this.user = user;
        this.errorService = errorService;
    }

    public async execute(credentials: IUserCredentials) {
        try {
            await this.user.login(credentials);
        } catch (e) {
            await this.errorService.handle(e);
        }
    }
}
