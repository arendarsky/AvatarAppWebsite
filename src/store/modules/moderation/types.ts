import {IModerationItem} from '@/entities/Moderation';

export enum Types {
  STORE_QUEUE = 'moderation/store_queue',
  NEXT = 'moderation/next',
  STOP = 'moderation/stop',
}

export class StoreQueue implements IFluxStandardAction {
  public type = Types.STORE_QUEUE;
  constructor(public payload: IModerationItem[]) {}
}

export class Next implements IFluxStandardAction {
  public type = Types.NEXT;
}

export class Stop implements IFluxStandardAction {
  public type = Types.STOP;
}
