import {IModerationItem} from '@/entities/Moderation';

export interface IModerationState {
  activeItem: IModerationItem | null;
  activeItemIndex: number;
  storedItems: IModerationItem[] | null;
}

export const initialState = (): IModerationState => {
  return {
    activeItem: null,
    activeItemIndex: 0,
    storedItems: null,
  };
};
