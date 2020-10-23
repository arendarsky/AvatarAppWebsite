/** Generate by swagger-axios-codegen */
// tslint:disable
/* eslint-disable */
import axiosStatic, { AxiosInstance } from 'axios';

const basePath = '';

export interface IRequestOptions {
  headers?: any;
  baseURL?: string;
  responseType?: string;
}

export interface IRequestConfig {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
}

// Add options interface
export interface ServiceOptions {
  axios?: AxiosInstance;
}

// Add default options
export const serviceOptions: ServiceOptions = {};

// Instance selector
export function axios(configs: IRequestConfig, resolve: (p: any) => void, reject: (p: any) => void): Promise<any> {
  if (serviceOptions.axios) {
    return serviceOptions.axios
      .request(configs)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  } else {
    throw new Error('please inject yourself instance like axios  ');
  }
}

export function getConfigs(method: string, contentType: string, url: string, options: any): IRequestConfig {
  url = basePath + url;
  const configs: IRequestConfig = { ...options, method, url };
  configs.headers = {
    ...options.headers,
    'Content-Type': contentType
  };
  return configs;
}

export interface IList<T> extends Array<T> {}
export interface List<T> extends Array<T> {}
export interface IDictionary<TValue> {
  [key: string]: TValue;
}
export interface Dictionary<TValue> extends IDictionary<TValue> {}

export interface IListResult<T> {
  items?: T[];
}

export class ListResultDto<T> implements IListResult<T> {
  items?: T[];
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount: number;
}

export class PagedResultDto<T> implements IPagedResult<T> {
  totalCount!: number;
}

// customer definition
// empty

export interface VideoModel {
  /**  */
  name: string;

  /**  */
  isActive: boolean;

  /**  */
  isApproved: boolean;

  /**  */
  startTime: number;

  /**  */
  endTime: number;
}

export interface ModerationUserModel {
  /**  */
  video: VideoModel;

  /**  */
  email: string;

  /**  */
  id: number;

  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  profilePhoto: string;
}

export interface GeneralMessageDto {
  /**  */
  text: string;

  /**  */
  subject: string;
}

export interface UserDto {
  /**  */
  name: string;

  /**  */
  email: string;

  /**  */
  password: string;

  /**  */
  consentToGeneralEmail: boolean;
}

export interface AuthorizationResponseModel {
  /**  */
  token: string;

  /**  */
  confirmationRequired: boolean;
}

export interface PrivateProfileUserModel {
  /**  */
  likesNumber: number;

  /**  */
  instagramLogin: string;

  /**  */
  email: string;

  /**  */
  videos: VideoModel[];

  /**  */
  id: number;

  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  profilePhoto: string;
}

export interface PublicProfileUserModel {
  /**  */
  instagramLogin: string;

  /**  */
  videos: VideoModel[];

  /**  */
  id: number;

  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  profilePhoto: string;
}

export interface NotificationUserModel {
  /**  */
  date: Date;

  /**  */
  id: number;

  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  profilePhoto: string;
}

export interface PrivateProfileDto {
  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  instagramLogin: string;
}

export interface RatingUserModel {
  /**  */
  likesNumber: number;

  /**  */
  video: VideoModel;

  /**  */
  id: number;

  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  profilePhoto: string;
}

export interface VideoUserModel {
  /**  */
  video: VideoModel;

  /**  */
  id: number;

  /**  */
  name: string;

  /**  */
  description: string;

  /**  */
  profilePhoto: string;
}
