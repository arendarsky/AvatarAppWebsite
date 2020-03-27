import { IUserToken } from "@/entities/user"

export enum Types {
    LOGIN = "user/login",
    LOGOUT = "user/logout",
    INVALID = "user/invalid"
}

export class Login implements IFluxStandardAction{
    type = Types.LOGIN;
    constructor(public payload: IUserToken) {}
}

export class Logout implements IFluxStandardAction {
    type = Types.LOGOUT;
}

export class Invalid implements IFluxStandardAction {
    type = Types.INVALID;
}