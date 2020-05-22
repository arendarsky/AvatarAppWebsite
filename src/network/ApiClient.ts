import axios from 'axios';
import { IApiResponse } from './ApiResponse';
import { INetworkClient } from './NetworkClient';
import { IApiError } from './ApiError';
import { IApiRequest } from './ApiRequest';
import store from '@/store';

export enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    DELETE = 'DELETE',
    PUT = 'PUT',
}

export class ApiClient implements INetworkClient {
    public static shared = new ApiClient();

    // Create headers
    private static createHeaders(userToken: string | null): any {
      if (!userToken) {
        throw new Error('unauthorized');
      }
      return {
        Authorization: `Bearer ${userToken}`,
      };
    }

    public baseUrl = 'https://xce-factor.ru';

    public timeout = 15 * 1000;

    public request<T extends IApiResponse>(request: IApiRequest<T>): Promise<T> {
        const isRead = request.method === HttpMethod.GET || request.query;
        const userToken = store.state.user.userToken;

        return new Promise<T>((resolve, reject) => {
            axios({
                    url: request.path,
                    method: request.method,
                    params: isRead && request.params,
                    withCredentials: false,
                    data: !isRead && request.params,
                    timeout: this.timeout,
                    baseURL: request.baseUrl || this.baseUrl,
                    headers: request.auth ? ApiClient.createHeaders(userToken) : null,
                })
                .then((data) => {
                    const response = request.parse
                        ? request.parse(data)
                        : this.parse<T>(data);
                    resolve(response);
                })
                .catch((err) => {
                    const apiError = this.normalizeError(err);
                    reject(apiError);
                });
        });
    }

    // Default parser
    private parse<T extends IApiResponse>(data: any): T {
        return data;
    }

    // Convert axios error into APIError
    private normalizeError(error: any): IApiError {
        return {
            status: error.response && error.response.status,
            message: error.message,
            raw: error,
        };
    }
}
