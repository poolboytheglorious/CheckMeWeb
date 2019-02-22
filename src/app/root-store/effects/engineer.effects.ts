import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { DataService } from '../../data.service';
import * as engineerActions from '../actions/engineer.actions';
import { Engineer } from '../models/engineer.model';

@Injectable()
export class EngineerEffect {

    constructor (
        private actions$: Actions,
    private dataService: DataService
    ) {}

    @Effect()
    loadEngineers$: Observable<Action> = this.actions$.pipe(
        ofType<engineerActions.LoadEngineers>(
            engineerActions.EngineerActionTypes.LOAD_ENGINEERS
        ),
        mergeMap((actions: engineerActions.LoadEngineers) =>
            this.dataService.getEngineers().pipe(
                map(
                    (engineers: Engineer[]) =>
                    new engineerActions.LoadEngineerSuccess(engineers)
                ),
                catchError(err => of(new engineerActions.LoadEngineerFail(err)))
            )
        )
    )

}