import { MutationTree } from 'vuex';
import {ICastingState, initialState} from './state';
import {StoreQueue, Types} from './types';

export const mutations: MutationTree<ICastingState> = {
  [Types.STORE_QUEUE]: (state, action: StoreQueue) => {
    state.storedItems = action.payload;
    state.activeItemIndex = 0;
    state.activeItem = action.payload[state.activeItemIndex];
  },
  [Types.NEXT]: (state) => {
    if (!(state.activeItem && state.storedItems )) {
      return;
    }
    const nextIndex = state.activeItemIndex + 1;

    if (nextIndex > state.storedItems.length) {
      state.storedItems = null;
      state.activeItem = null;
      state.activeItemIndex = 0;
      return;
    }
    state.activeItemIndex = nextIndex;
    state.activeItem = state.storedItems[nextIndex];
  },
  [Types.STOP]: (state) => {
    const initial = initialState();
    state.storedItems = initial.storedItems;
    state.activeItem = initial.activeItem;
    state.activeItemIndex = initial.activeItemIndex;
  },
};
