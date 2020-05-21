import {IRatingItem} from '@/entities/Rating';

export interface IRatingState {
  items: IRatingItem[];
}

export const initialState = (): IRatingState => {
  return {
    items: [],
  };
};
