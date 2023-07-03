import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state?.newsSlice ?? initialState;

export const selectNewsSlice = createSelector([selectSlice], state => state);
