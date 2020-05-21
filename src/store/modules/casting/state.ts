import {ICastingItem} from '@/entities/Casting';

export interface ICastingState {
  activeItem: ICastingItem | null;
  activeItemIndex: number;
  storedItems: ICastingItem[] | null;
}

export const initialState = (): ICastingState => {
  return {
    activeItem: null,
    activeItemIndex: 0,
    storedItems: null,
  };
};
