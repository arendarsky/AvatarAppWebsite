export interface IBaseUseCase {
    execute: (params?: any) => Promise<any>;
}
