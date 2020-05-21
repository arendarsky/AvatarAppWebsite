import { AxiosResponse } from 'axios';
import { IApiRequest } from '@/network/ApiRequest';
import { HttpMethod } from '@/network/ApiClient';
import {IRatingItem} from '@/entities/Rating';

export namespace RatingApi {
  export class GetTop implements IApiRequest<IRatingItem[]> {
    public path = 'api/rating/get';
    public method = HttpMethod.GET;
    public params: {number: number};
    public auth = true;
    constructor(number: number) {
      this.params = {number};
    }
    public parse = (data: AxiosResponse) => data.data;
  }
}
