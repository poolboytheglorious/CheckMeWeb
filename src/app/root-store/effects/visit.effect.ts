import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs';

import { map, switchMap, catchError } from 'rxjs/operators';
import { DataService } from 'src/app/data.service';


@Injectable()

export class VisitsEffects {

constructor(
    private actions$: Actions,
    private dataService: DataService
) {}

// @Effect()
// console.log('yay');
}
