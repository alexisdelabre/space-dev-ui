import { createReducer, on } from '@ngrx/store';
import { LaunchSummary } from '../app.shared';
import {
  loadElements,
  loadElementsFailure,
  loadElementsSuccess,
} from './homepage.actions';

export interface HomepageState {
  elements: any[];
  error: string;
  status: 'success' | 'error' | 'loading' | 'pending';
}

export const initialState: HomepageState = {
  elements: [],
  error: '',
  status: 'pending',
};

export const homepageReducer = createReducer(
  initialState,
  on(loadElements, (state) => ({ ...state, status: 'loading' })),
  on(loadElementsSuccess, (state, { elements }) => ({
    ...state,
    elements: elements,
    error: '',
    status: 'success',
  })),
  on(loadElementsFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);
