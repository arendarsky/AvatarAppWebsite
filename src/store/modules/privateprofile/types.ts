import {IPrivateProfile} from '@/entities/PrivateProfile';

export enum Types {
  STORE_ITEM = 'private_profile/store_items',
  CLEAR = 'private_profile/clear',
}

export class StoreItem implements IFluxStandardAction {
  public type = Types.STORE_ITEM;
  constructor(public payload: IPrivateProfile) {}
}

export class Clear implements IFluxStandardAction{
  public type = Types.CLEAR;
}
