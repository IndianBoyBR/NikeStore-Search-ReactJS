import { DefaultTheme } from 'styled-components';
import * as slice from '..';

import { RootState } from 'types';
import { themes } from '../../themes';
import { selectTheme, selectThemeKey } from '../selectors';
import { ThemeKeyType, ThemeState } from '../types';

describe('theme slice', () => {
  let state: ThemeState;

  beforeEach(() => {
    state = slice.initialState;
  });

  it('should return the initial state', () => {
    expect(slice.reducer(undefined, { type: '' })).toEqual(state);
  });

  it('should changeTheme', () => {
    expect(
      slice.reducer(state, slice.themeActions.changeTheme('light')),
    ).toEqual<ThemeState>({ selected: 'light' });
  });

  describe('selectors', () => {
    it('selectTheme', () => {
      let state: RootState = {};

      expect(selectTheme(state)).toEqual<DefaultTheme>(themes.light);

      state = {
        theme: { selected: 'light' },
      };

      expect(selectTheme(state)).toEqual<DefaultTheme>(themes.light);
    });

    it('selectThemeKey', () => {
      let state: RootState = {};

      expect(selectThemeKey(state)).toEqual<ThemeKeyType>(
        slice.initialState.selected,
      );

      state = {
        theme: { selected: 'light' },
      };

      expect(selectThemeKey(state)).toEqual<ThemeKeyType>(
        state.theme!.selected,
      );
    });
  });
});
