import { AxiosResponse } from 'axios';
import { IApiRequest } from '@/network/ApiRequest';
import {ApiClient, HttpMethod} from '@/network/ApiClient';
import { IUserCredentials, IUserToken } from '@/entities/User';
import {ICastingItem, ILike} from '@/entities/Casting';

export default class Resources {
  public apiClient: ApiClient;
  public readonly pathVideo: string = '/api/video/';
  public readonly pathToImage: string = '/api/profile/photo/get/';

  constructor() {
    this.apiClient = new ApiClient();
  }
  public GetVideoSource(name: string): string {
    if (!name) { return ''; }
    return this.pathVideo + name;
  }

  public GetImageSource(name: string): string {
    if (!name) { return ''; }
    return this.pathToImage + name;
  }
}
