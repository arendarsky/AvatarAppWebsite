import { AxiosResponse } from 'axios';
import { IApiRequest } from '@/network/ApiRequest';
import { HttpMethod } from '@/network/ApiClient';
import {IPrivateProfile} from '@/entities/PrivateProfile';

export namespace ProfileApi {
    export class GetPrivateProfile implements IApiRequest<IPrivateProfile> {
        public path = 'api/profile/get';
        public method = HttpMethod.GET;
        public auth = true;
        public parse = (data: AxiosResponse) => data.data;
    }

    export class SetDescription implements IApiRequest<any> {
      public path = 'api/profile/set_description';
      public method = HttpMethod.POST;
      public auth = true;
      public query = true;
      public params: {description: string};
      constructor(description: string) {
        this.params = {description};
      }
      public parse = (data: AxiosResponse) => data.data;
    }

  export class SetName implements IApiRequest<any> {
    public path = 'api/profile/set_name';
    public method = HttpMethod.GET;
    public auth = true;
    public params: {name: string};
    constructor(name: string) {
      this.params = {name};
    }
    public parse = (data: AxiosResponse) => data.data;
  }

  export class SendVideoToCasting implements IApiRequest<any> {
    public path = 'api/video/set_active';
    public method = HttpMethod.GET;
    public auth = true;
    public params: {fileName: string};
    constructor(fileName: string) {
      this.params = {fileName};
    }
    public parse = (data: AxiosResponse) => data.data;
  }

  export class RemoveVideo implements IApiRequest<any> {
    public path: string;
    public method = HttpMethod.GET;
    public auth = true;
    constructor(fileName: string) {
      this.path = `api/video/remove/${fileName}`;
    }
    public parse = (data: AxiosResponse) => data.data;
  }
}
