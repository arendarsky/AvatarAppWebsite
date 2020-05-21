import { AxiosResponse } from 'axios';
import { IApiRequest } from '@/network/ApiRequest';
import { HttpMethod } from '@/network/ApiClient';
import {ILike} from '@/entities/Casting';
import {IModerationItem} from '@/entities/Moderation';

export namespace AdminApi {
  export class GetVideos implements IApiRequest<IModerationItem[]> {
    public path = 'api/admin/get_videos';
    public method = HttpMethod.GET;
    public params: {number: number};
    public auth = true;
    constructor(number: number) {
      this.params = {number};
    }
    public parse = (data: AxiosResponse) => data.data;
  }

  export class Moderate implements IApiRequest<any> {
    public path = 'api/admin/moderate';
    public method = HttpMethod.GET;
    public params: {name: string, isApproved: boolean};
    public auth = true;
    constructor(like: ILike) {
      this.params = {name: like.name, isApproved: like.isLike};
    }
    public parse = (data: AxiosResponse) => data.data;
  }
}
