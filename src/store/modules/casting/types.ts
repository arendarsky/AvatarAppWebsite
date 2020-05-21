import {ICastingItem} from '@/entities/Casting';

export enum Types {
  STORE_QUEUE = 'casting/store_queue',
  NEXT = 'casting/next',
  STOP = 'casting/stop',
}

export class StoreQueue implements IFluxStandardAction {
  public type = Types.STORE_QUEUE;
  constructor(public payload: ICastingItem[]) {}
}

export class Next implements IFluxStandardAction {
  public type = Types.NEXT;
}

export class Stop implements IFluxStandardAction {
  public type = Types.STOP;
}
