import { AxiosResponse } from "axios"
import { IApiRequest } from "@/network/ApiRequest";
import { HttpMethod } from "@/network/ApiClient";
import { IUserCredentials, IUserToken } from "@/entities/User"

export namespace UserApi {
    export class GetToken implements IApiRequest<IUserToken> {
        path = "api/auth/authorize";
        method = HttpMethod.POST;
        query = true;
        parse = (data: AxiosResponse) => data.data;
        params: IUserCredentials;
        constructor(user: IUserCredentials) {
            this.params = user;
        }
    }
}
