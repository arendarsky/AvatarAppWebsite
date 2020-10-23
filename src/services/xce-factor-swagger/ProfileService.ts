import {
  PrivateProfileUserModel,
  VideoModel,
  PublicProfileUserModel,
  NotificationUserModel,
  PrivateProfileDto,
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

export class ProfileService {
  /**
   * Get user private profile
   */
  static get(options: IRequestOptions = {}): Promise<PrivateProfileUserModel> {
    return new Promise((resolve, reject) => {
      let url = '/api/profile/get';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get user public profile
   */
  static get1(
    params: {
      /**  */
      id?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PublicProfileUserModel> {
    return new Promise((resolve, reject) => {
      let url = '/api/profile/public/get';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { id: params['id'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get user's notifications
   */
  static notifications(
    params: {
      /**  */
      number?: number;
      /**  */
      skip?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<NotificationUserModel[]> {
    return new Promise((resolve, reject) => {
      let url = '/api/profile/notifications';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { number: params['number'], skip: params['skip'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Set user description
   */
  static setDescription(
    params: {
      /**  */
      description?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/api/profile/set_description';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);
      configs.params = { description: params['description'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Set user name
   */
  static setName(
    params: {
      /**  */
      name?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/api/profile/set_name';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { name: params['name'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Set user password
   */
  static setPassword(
    params: {
      /**  */
      oldPassword?: string;
      /**  */
      newPassword?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let url = '/api/profile/set_password';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);
      configs.params = { oldPassword: params['oldPassword'], newPassword: params['newPassword'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Upload image to server
   */
  static upload(
    params: {
      /**  */
      file: any;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = '/api/profile/photo/upload';

      const configs: IRequestConfig = getConfigs('post', 'multipart/form-data', url, options);

      let data = new FormData();
      if (params['file']) {
        data.append('file', params['file'] as any);
      }

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get image stream by name
   */
  static get2(
    params: {
      /**  */
      name: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = '/api/profile/photo/get/{name}';
      url = url.replace('{name}', params['name'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Set user description
   */
  static updateProfile(
    params: {
      /** requestBody */
      body?: PrivateProfileDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/api/profile/update_profile';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}
