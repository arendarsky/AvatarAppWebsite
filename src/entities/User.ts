import UserTokenRepository from '@/repositories/UserTokenRepository';
import store from '@/store';
import {Stop as StopCasting} from '@/store/modules/casting/types';
import {Clear as ClearRating} from '@/store/modules/rating/types';
import {Clear as ClearPrivateProfile} from '@/store/modules/privateprofile/types';
import {Clear as ClearRegistration} from '@/store/modules/registration/types';
import {Stop as StopModeration} from '@/store/modules/moderation/types';
import {Failed, Success} from '@/store/modules/registration/types';
import {Confirmed} from '@/store/modules/user/types';
import {IConfirmEmailUseCase} from '@/usecases/authentication/ConfirmEmailUseCase';
import AuthenticationService from '@/services/AuthenticationService';

export interface IUserCredentials {
  email: string;
  password: string;
}

export interface IRegistrationData extends IUserCredentials {
  name: string;
}

export interface IUserToken {
  token: string | null;
  confirmationRequired: boolean;
}

export interface IEmailConfirmation {
  guid: string;
  confirmationCode: string;
}

export interface IPasswordChange extends IConfirmEmailUseCase {
  password: string;
}

export class UserEntity {
  private repository: UserTokenRepository;
  private authenticationService: AuthenticationService;

  constructor() {
    this.repository = new UserTokenRepository();
    this.authenticationService = new AuthenticationService();
  }

  public async login(credentials: IUserCredentials) {
    const token = await this.repository.fetchItem(credentials);
    this.repository.saveItem(token);
  }

  public logout() {
    this.repository.clearItem();
    store.commit(new StopCasting());
    store.commit(new ClearRating());
    store.commit(new ClearPrivateProfile());
    store.commit(new StopModeration());
    store.commit(new ClearRegistration());
  }

  public async register(userData: IRegistrationData) {
    const data = await this.authenticationService.Register().handle(userData);
    if (data) {
      store.commit(new Success());
      return;
    }
    store.commit(new Failed());
  }

  public async sendEmailConfirmation(email: string) {
    await this.authenticationService.SendEmailConfirmation().handle(email);
  }

  public async confirmEmail(confirmation: IEmailConfirmation): Promise<boolean> {
    return await this.authenticationService.ConfirmEmail().handle(confirmation);
  }

  public async sendPasswordReset(email: string) {
    await this.authenticationService.ResetPassword().handle(email);
  }

  public async passwordChange(passwordChange: IPasswordChange): Promise<boolean> {
    return await this.authenticationService.ChangePassword().handle(passwordChange);
  }
}
