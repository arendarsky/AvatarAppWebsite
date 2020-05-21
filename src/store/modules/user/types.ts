import { IUserToken } from '@/entities/user';

export enum Types {
    LOGIN = 'user/login',
    LOGOUT = 'user/logout',
    CONFIRMED = 'user/confirmed',
    INVALID = 'user/invalid',
}

export class Login implements IFluxStandardAction {
    public type = Types.LOGIN;
    constructor(public payload: IUserToken) {}
}

export class Logout implements IFluxStandardAction {
    public type = Types.LOGOUT;
}

export class Invalid implements IFluxStandardAction {
    public type = Types.INVALID;
}

export class Confirmed implements IFluxStandardAction {
  public type = Types.CONFIRMED;
}
