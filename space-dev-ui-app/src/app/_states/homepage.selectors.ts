import { createSelector } from '@ngrx/store';
import { AppState } from '../app.states';
import { HomepageState } from './homepage.reducer';

export const selectElements = (state: AppState) => state.homepageState;
export const selectAllElements = createSelector(
  selectElements,
  (state: HomepageState) => state.elements
);
