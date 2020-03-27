import {ICastingItem} from '@/entities/Casting';

export interface ICastingState {
  activeItem: ICastingItem | null
  activeItemIndex: number | null;
  storedItems: Array<ICastingItem> | null;
  nothingToShow: boolean;
}

export const initialState = (): ICastingState => {
  return {
    activeItem: null,
    activeItemIndex: null,
    storedItems: null,
    nothingToShow: false
  }
};
