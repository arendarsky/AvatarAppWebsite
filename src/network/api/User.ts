import {AxiosResponse} from 'axios';
import {IApiRequest} from '@/network/ApiRequest';
import {HttpMethod} from '@/network/ApiClient';
import {IEmailConfirmation, IPasswordChange, IRegistrationData, IUserCredentials, IUserToken} from '@/entities/User';

export namespace UserApi {
  export class GetToken implements IApiRequest<IUserToken> {
    public path = 'api/auth/authorize';
    public method = HttpMethod.POST;
    public query = true;
    public params: IUserCredentials;

    constructor(user: IUserCredentials) {
      this.params = user;
    }

    public parse = (data: AxiosResponse) => data.data;
  }

  export class Register implements IApiRequest<boolean> {
    public path = 'api/auth/register';
    public method = HttpMethod.POST;
    public params: IRegistrationData;

    constructor(user: IRegistrationData) {
      this.params = user;
    }

    public parse = (data: AxiosResponse) => data.data;
  }

  export class SendEmail implements IApiRequest<any> {
    public path = 'api/auth/send';
    public method = HttpMethod.GET;
    public params: { email: string };

    constructor(email: string) {
      this.params = {email};
    }

    public parse = (data: AxiosResponse) => data.data;
  }

  export class ConfirmEmail implements IApiRequest<boolean> {
    public path = 'api/auth/confirm';
    public method = HttpMethod.POST;
    public query = true;
    public params: IEmailConfirmation;

    constructor(confirmation: IEmailConfirmation) {
      this.params = confirmation;
    }

    public parse = (data: AxiosResponse) => data.data;
  }

  export class SendPasswordReset implements IApiRequest<any> {
    public path = 'api/auth/send_reset';
    public method = HttpMethod.GET;
    public params: { email: string };

    constructor(email: string) {
      this.params = {email};
    }

    public parse = (data: AxiosResponse) => data.data;
  }

  export class ChangePassword implements IApiRequest<boolean> {
    public path = 'api/auth/password_change';
    public method = HttpMethod.POST;
    public query = true;
    public params: IPasswordChange;

    constructor(passwordChange: IPasswordChange) {
      this.params = passwordChange;
    }

    public parse = (data: AxiosResponse) => data.data;
  }
}
