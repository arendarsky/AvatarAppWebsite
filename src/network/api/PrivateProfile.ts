import { AxiosResponse } from "axios"
import { IApiRequest } from "@/network/ApiRequest";
import { HttpMethod } from "@/network/ApiClient";
import { IPrivateProfile } from "@/entities/PrivateProfile"

export namespace PrivateProfileApi {
    export class GetPrivateProfile implements IApiRequest<IPrivateProfile> {
        path = "api/profile/get";
        method = HttpMethod.GET;
        parse = (data: AxiosResponse) => data.data;
        auth = true;
    }
}
