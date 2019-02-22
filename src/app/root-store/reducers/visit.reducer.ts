import { Action } from '@ngrx/store';
import { Visit } from '../models/visit.model';
import * as VisitActions from '../actions/visit.actions';

export function visitReducer (state: Visit[], action: VisitActions.Actions) {
    switch (action.type) {
        case VisitActions.ADD_VISIT:
            return [...state, action.payload];
        default:
            return state;
    }
}
