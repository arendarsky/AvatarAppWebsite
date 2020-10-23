import {
  UserDto,
  AuthorizationResponseModel,
  IList,
  List,
  IListResult,
  ListResultDto,
  IPagedResult,
  PagedResultDto,
  Dictionary,
  IDictionary,
  IRequestOptions,
  IRequestConfig,
  getConfigs,
  axios
} from './index.defs';

export class AuthenticationService {
  /**
   * Register new user
   */
  static register(
    params: {
      /** requestBody */
      body?: UserDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let url = '/api/auth/register';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get authorization token
   */
  static authorize(
    params: {
      /**  */
      email?: string;
      /**  */
      password?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<AuthorizationResponseModel> {
    return new Promise((resolve, reject) => {
      let url = '/api/auth/authorize';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);
      configs.params = { email: params['email'], password: params['password'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Send a email confirmation message to the email.
   */
  static send(
    params: {
      /**  */
      email?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/api/auth/send';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { email: params['email'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Check confirmation code and so validate email
   */
  static confirm(
    params: {
      /**  */
      guid?: string;
      /**  */
      confirmCode?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let url = '/api/auth/confirm';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);
      configs.params = { guid: params['guid'], confirmCode: params['confirmCode'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Send a password reset message to the email.
   */
  static sendReset(
    params: {
      /**  */
      email?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/api/auth/send_reset';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { email: params['email'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Check confirmation code and change password
   */
  static passwordChange(
    params: {
      /**  */
      guid?: string;
      /**  */
      confirmCode?: string;
      /**  */
      password?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let url = '/api/auth/password_change';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);
      configs.params = { guid: params['guid'], confirmCode: params['confirmCode'], password: params['password'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Set Firebase Id
   */
  static firebaseSet(options: IRequestOptions = {}): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let url = '/api/auth/firebase_set';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}
