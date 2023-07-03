import NikeSnkrs from 'app/components/atoms/svgs/logos/NikeSnkrs';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { NewsSliceState, SliderItem } from './types';

const items: SliderItem[] = [
  {
    id: 1,
    title: 'Fique por dentro dos lançamentos',
    Image: NikeSnkrs,
    link: {
      label: 'SKNRS',
      url: '/',
    },
  },
  {
    id: 2,
    title: 'Nova coleção feminina',
    Image: NikeSnkrs,
    link: {
      label: 'SKNRS',
      url: '/',
    },
  },
  {
    id: 3,
    title: 'Nova coleção masculina',
    Image: NikeSnkrs,
    link: {
      label: 'SKNRS',
      url: '/',
    },
  },
];

export const initialState: NewsSliceState = {
  selected: items[0],
  items: items,
};

const slice = createSlice({
  name: 'newsSlice',
  initialState,
  reducers: {
    goToNext(state) {
      const [firstItem] = state.items;

      if (state.selected) {
        const currentSelectedIndex = state.items.findIndex(
          item => item.id === state.selected?.id,
        );

        const nextElement = state.items[currentSelectedIndex + 1];
        state.selected = nextElement ?? firstItem;
      } else {
        state.selected = firstItem;
      }
    },
    goToPrevious(state) {
      const lastItem = state.items[state.items.length - 1];

      if (state.selected) {
        const currentSelectedIndex = state.items.findIndex(
          item => item.id === state.selected?.id,
        );

        const nextElement = state.items[currentSelectedIndex - 1];

        state.selected = nextElement ?? lastItem;
      } else {
        state.selected = lastItem;
      }
    },
  },
});

export const { actions: newsSliceActions } = slice;

export const useNewsSliceSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useNewsSliceSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
