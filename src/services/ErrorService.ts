import { IBaseService } from './BaseService';

export interface IErrorService {
    context?: any; // TODO: define error context type
}

export default class ErrorService implements IBaseService {
    public context: any;

    constructor({ context = '' }: IErrorService) {
        this.context = context;
    }

    public async handle(error: any) {
        console.log(`error called in ${this.context}`);
        console.log(error);
        return;
    }
}
