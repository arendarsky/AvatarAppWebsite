import {IUserToken} from '@/entities/user';

export enum Types {
  SUCCESS = 'registration/success',
  FAILED = 'registration/failed',
  CLEAR = 'registration/clear'
}

export class Success implements IFluxStandardAction {
  public type = Types.SUCCESS;
}

export class Failed implements IFluxStandardAction {
  public type = Types.FAILED;
}

export class Clear implements IFluxStandardAction{
  public type = Types.CLEAR;
}
