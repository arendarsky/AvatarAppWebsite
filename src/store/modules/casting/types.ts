import {ICastingItem} from '@/entities/Casting';

export enum Types {
  STORE_QUEUE = "casting/store_queue",
  NEXT = "casting/next",
  STOP = "casting/stop"
}

export class StoreQueue implements IFluxStandardAction{
  type = Types.STORE_QUEUE;
  constructor(public payload: Array<ICastingItem>) {}
}

export class Next implements IFluxStandardAction{
  type = Types.NEXT;
}

export class Stop implements IFluxStandardAction{
  type = Types.STOP;
}
