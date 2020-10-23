import {
  RatingUserModel,
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

export class RatingService {
  /**
   * Get overall rating
   */
  static get(
    params: {
      /**  */
      number?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<RatingUserModel[]> {
    return new Promise((resolve, reject) => {
      let url = '/api/rating/get';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { number: params['number'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get personal rating
   */
  static get1(options: IRequestOptions = {}): Promise<number> {
    return new Promise((resolve, reject) => {
      let url = '/api/rating/user/get';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get semifinalists
   */
  static getSemifinalists(options: IRequestOptions = {}): Promise<number> {
    return new Promise((resolve, reject) => {
      let url = '/api/rating/get_semifinalists';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}
