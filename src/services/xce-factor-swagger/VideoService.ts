import {
  VideoUserModel,
  VideoModel,
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

export class VideoService {
  /**
   * Upload video to server
   */
  static upload(
    params: {
      /**  */
      file: any;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = '/api/video/upload';

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
   * Get list of video names that are unwatched by current user
   */
  static getUnwatched(
    params: {
      /** Number of requested video */
      number?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<VideoUserModel[]> {
    return new Promise((resolve, reject) => {
      let url = '/api/video/get_unwatched';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { number: params['number'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get video stream by name
   */
  static video(
    params: {
      /**  */
      name: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = '/api/video/{name}';
      url = url.replace('{name}', params['name'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Set video like
   */
  static setLike(
    params: {
      /**  */
      name?: string;
      /**  */
      isLike?: boolean;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/api/video/set_like';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { name: params['name'], isLike: params['isLike'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Set video fragment interval
   */
  static setInterval(
    params: {
      /**  */
      fileName?: string;
      /**  */
      startTime?: number;
      /**  */
      endTime?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/api/video/set_interval';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { fileName: params['fileName'], startTime: params['startTime'], endTime: params['endTime'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Set video to active
   */
  static setActive(
    params: {
      /**  */
      fileName?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/api/video/set_active';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { fileName: params['fileName'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Remove video from user's videos
   */
  static remove(
    params: {
      /**  */
      name: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/api/video/remove/{name}';
      url = url.replace('{name}', params['name'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}
