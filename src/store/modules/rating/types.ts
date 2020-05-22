import {IRatingItem} from '@/entities/Rating';

export enum Types {
  STORE_ITEMS = 'rating/store_items',
  CLEAR = 'rating/clear',
}

export class StoreItems implements IFluxStandardAction {
  public type = Types.STORE_ITEMS;
  constructor(public payload: IRatingItem[]) {}
}

export class Clear implements IFluxStandardAction {
  public type = Types.CLEAR;
}
