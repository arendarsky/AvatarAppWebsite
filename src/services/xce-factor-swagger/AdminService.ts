import {
  ModerationUserModel,
  VideoModel,
  GeneralMessageDto,
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

export class AdminService {
  /**
   * Get list of unmoderated video names
   */
  static getVideos(
    params: {
      /** Number of requested video names */
      number?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ModerationUserModel[]> {
    return new Promise((resolve, reject) => {
      let url = '/api/admin/get_videos';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { number: params['number'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Moderate video
   */
  static moderate(
    params: {
      /**  */
      name?: string;
      /**  */
      isApproved?: boolean;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/api/admin/moderate';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { name: params['name'], isApproved: params['isApproved'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Cleaning storage from unused video files
   */
  static cleanVideoFiles(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/api/admin/clean_video_files';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Cleaning storage from unused video files
   */
  static cleanImageFiles(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/api/admin/clean_image_files';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Set Semifinalist
   */
  static setSemifinalist(
    params: {
      /**  */
      userId?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/api/admin/set_semifinalist';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { userId: params['userId'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Send general message
   */
  static sendGeneralMessage(
    params: {
      /** requestBody */
      body?: GeneralMessageDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/api/admin/send_general_message';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}
