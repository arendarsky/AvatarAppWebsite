import { AxiosResponse } from "axios"
import { IApiRequest } from "@/network/ApiRequest";
import { HttpMethod } from "@/network/ApiClient";
import { IUserCredentials, IUserToken } from "@/entities/User"
import {ICastingItem, ILike} from '@/entities/Casting';

export namespace CastingApi {
  export class GetUnwatched implements IApiRequest<Array<ICastingItem>> {
    path = "api/video/get_unwatched";
    method = HttpMethod.GET;
    parse = (data: AxiosResponse) => data.data;
    params: {number: number};
    auth = true;
    constructor(number: number) {
      this.params = {number: number};
    }
  }

  export class SetLike implements IApiRequest<any>{
    path = "api/video/set_like";
    method = HttpMethod.GET;
    parse = (data: AxiosResponse) => data.data;
    params: ILike;
    auth = true;
    constructor(like: ILike) {
      this.params = like;
    }
  }
}
