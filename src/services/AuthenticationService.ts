import {IBaseService} from '@/services/BaseService';
import {IEmailConfirmation, IPasswordChange, IRegistrationData} from '@/entities/User';
import {ApiClient} from '@/network/ApiClient';
import {UserApi} from '@/network/api/User';

export default class AuthenticationService {
  public ChangePassword(): IBaseService {
    return {
      handle: async (passwordChange: IPasswordChange): Promise<boolean> => {
        return await ApiClient.shared.request(new UserApi.ChangePassword(passwordChange));
      },
    };
  }

  public ConfirmEmail(): IBaseService {
    return {
      handle: async (confirmation: IEmailConfirmation): Promise<boolean> => {
        return await ApiClient.shared.request(new UserApi.ConfirmEmail(confirmation));
      },
    };
  }

  public ResetPassword(): IBaseService {
    return {
      handle: async (email: string) => {
        await ApiClient.shared.request(new UserApi.SendPasswordReset(email));
      },
    };
  }

  public Register(): IBaseService {
    return {
      handle: async (userData: IRegistrationData): Promise<boolean> => {
        const data = await ApiClient.shared.request(new UserApi.Register(userData));
        if (data) {
          await ApiClient.shared.request(new UserApi.SendEmail(userData.email));
        }
        return data;
      },
    };
  }

  public SendEmailConfirmation(): IBaseService {
    return {
      handle: async (email: string) => {
        await ApiClient.shared.request(new UserApi.SendEmail(email));
      },
    };
  }
}

