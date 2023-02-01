import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppService } from '../app.service';
import { AppState } from '../app.states';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  loadElements,
  loadElementsFailure,
  loadElementsSuccess,
} from './homepage.actions';

@Injectable()
export class HomepageEffects {
  constructor(
    private actions$: Actions,
    private appService: AppService,
    private store: Store<AppState>
  ) {}

  loadElements$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadElements),
      switchMap(() =>
        this.appService.getFiftyUpcomingLaunchs().pipe(
          map((elements) =>
            loadElementsSuccess({ elements: elements.results })
          ),
          catchError((error) => of(loadElementsFailure({ error: error })))
        )
      )
    )
  );
}
