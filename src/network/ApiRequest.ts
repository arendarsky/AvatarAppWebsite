import { HttpMethod } from "./ApiClient";
import { IApiResponse} from "./ApiResponse";

export interface IApiRequest<T extends IApiResponse> {
    path: string;
    method: HttpMethod;
    query?: boolean;
    params?: any;
    baseUrl?: string;
    auth?: boolean;
    parse?: (data: any) => T;
};
