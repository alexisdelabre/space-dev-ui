import { createAction, props } from '@ngrx/store';
import { LaunchSummary } from '../app.shared';

export const loadElements = createAction('[Homepage] Load Elements');

export const loadElementsSuccess = createAction(
  '[Homepage] Load Elements Success',
  props<{ elements: any[] }>()
);

export const loadElementsFailure = createAction(
  '[Homepage] Load Elements Failure',
  props<{ error: string }>()
);
