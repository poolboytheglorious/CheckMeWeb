import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Visit } from '../models/visit.model';

export const ADD_VISIT  = '[VISIT] Add';
export const EDIT_VISIT  = '[VISIT] Edit';

export class AddVisit implements Action {
    readonly type = ADD_VISIT;

    constructor (public payload: Visit) {}
}
export class EditVisit implements Action {
    readonly type = EDIT_VISIT;

    constructor (public payload: number) {}
}

export type Actions = AddVisit | EditVisit;
