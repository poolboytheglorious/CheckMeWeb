import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
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
        mergeMap((action: engineerActions.LoadEngineers) =>
            this.dataService.getEngineers().pipe(
                map(
                    (engineers: Engineer[]) =>
                    new engineerActions.LoadEngineersSuccess(engineers)
                ),
                catchError(err => of(new engineerActions.LoadEngineerFail(err)))
            )
        )
    );

    @Effect()
    loadEngineer$: Observable<Action> = this.actions$.pipe(
        ofType<engineerActions.LoadEngineer>(
            engineerActions.EngineerActionTypes.LOAD_ENGINEER
        ),
        mergeMap((action: engineerActions.LoadEngineer) =>
            this.dataService.getEngineerById(action.payload).pipe(
                map(
                    (engineer: Engineer) =>
                    new engineerActions.LoadEngineerSuccess(engineer)
                ),
                catchError(err => of(new engineerActions.LoadEngineerFail(err)))
            )
        ),
    );

    @Effect()
    createEngineer$: Observable<Action> = this.actions$.pipe(
        ofType<engineerActions.CreateEngineer>(
            engineerActions.EngineerActionTypes.CREATE_ENGINEER
        ),
        map((action: engineerActions.CreateEngineer) => action.payload),
        mergeMap((engineer: Engineer) =>
            this.dataService.createEngineer(engineer).pipe(
                map(
                    (newEngineer: Engineer) =>
                    new engineerActions.CreateEngineerSuccess(newEngineer)
                ),
                catchError(err => of(new engineerActions.CreateEngineerFail(err)))
            )
        )
    );

    @Effect()
    updateEngineer$: Observable<Action> = this.actions$.pipe(
        ofType<engineerActions.UpdateEngineer>(
            engineerActions.EngineerActionTypes.UPDATE_ENGINEER
        ),
        map((action: engineerActions.UpdateEngineer) => action.payload),
        mergeMap((engineer: Engineer) =>
            this.dataService.updateEngineer(engineer).pipe(
                map(
                    (updateEngineer: Engineer) =>
                    new engineerActions.UpdateEngineerSuccess({
                        id: updateEngineer.id,
                        changes: updateEngineer
                    })
                ),
                catchError(err => of(new engineerActions.UpdateEngineerFail(err)))
            )
        )
    );

    @Effect()
    deleteEngineer$: Observable<Action> = this.actions$.pipe(
        ofType<engineerActions.DeleteEngineer>(
            engineerActions.EngineerActionTypes.DELETE_ENGINEER
        ),
        map((action: engineerActions.DeleteEngineer) => action.payload),
        mergeMap((id: number) =>
            this.dataService.deleteEngineer(id).pipe(
                map(() => new engineerActions.DeleteEngineerSuccess(id),
                catchError(err => of(new engineerActions.DeleteEngineerFail(err)))
            )
        )
    ));


}
