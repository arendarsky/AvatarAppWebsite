import { AxiosResponse } from 'axios';
import { IApiRequest } from '@/network/ApiRequest';
import { HttpMethod } from '@/network/ApiClient';
import {ICastingItem, ILike} from '@/entities/Casting';

export namespace CastingApi {
  export class GetUnwatched implements IApiRequest<ICastingItem[]> {
    public path = 'api/video/get_unwatched';
    public method = HttpMethod.GET;
    public params: {number: number};
    public auth = true;
    constructor(number: number) {
      this.params = {number};
    }
    public parse = (data: AxiosResponse) => data.data;
  }

  export class SetLike implements IApiRequest<any> {
    public path = 'api/video/set_like';
    public method = HttpMethod.GET;
    public params: ILike;
    public auth = true;
    constructor(like: ILike) {
      this.params = like;
    }
    public parse = (data: AxiosResponse) => data.data;
  }
}
