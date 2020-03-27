export interface IApiError {
    message: string;
    status: number;
    raw: Error;
}