import { IBaseUseCase } from "./BaseUseCase"
import { UserEntity, IUserCredentials } from "@/entities/User"
import ErrorService from "@/services/ErrorService"

export interface ILogoutUseCase {
  user: UserEntity;
  errorService: ErrorService;
}

export default class LogoutUseCase implements IBaseUseCase {
  user: UserEntity;
  errorService: ErrorService;

  constructor({ user, errorService }: ILogoutUseCase) {
    this.user = user;
    this.errorService = errorService;
  }

  async execute() {
    try {
      this.user.logout();
    } catch (e) {
      await this.errorService.handle(e);
    }
  }
}
