import * as engineersActions from '../actions/engineer.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Engineer } from '../../root-store/models/engineer.model';
import * as fromRoot from '../../state/app-state';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface EngineerState extends EntityState<Engineer> {
    selectedEngineerId: number | null;
    loading: boolean;
    loaded: boolean;
    error: string;
}

export interface AppState extends fromRoot.AppState {
    engineers: EngineerState;
}

export const engineerAdapter: EntityAdapter<Engineer> = createEntityAdapter<Engineer>();

export const defaultEngineer: EngineerState = {
ids: [],
entities: {},
selectedEngineerId: null,
loading: false,
loaded: false,
error: ''
};

export const initialState = engineerAdapter.getInitialState(defaultEngineer);

export function EngineerReducer(
    state = initialState,
    action: engineersActions.Action): EngineerState {
            switch (action.type) {
        case engineersActions.EngineerActionTypes.LOAD_ENGINEERS_SUCCESS: {
            return engineerAdapter.addAll(action.payload, {
                ...state,
                loading: false,
                loaded: true,
            });
        }
        case engineersActions.EngineerActionTypes.LOAD_ENGINEERS_FAIL: {
            return {
                ...state,
                entities: {},
                loading: false,
                loaded: false,
                error: action.payload
            };
        }

        case engineersActions.EngineerActionTypes.LOAD_ENGINEER_SUCCESS: {
            return engineerAdapter.addOne(action.payload, {
                ...state,
               selectedEngineerId: action.payload.id
            });

        }

        case engineersActions.EngineerActionTypes.LOAD_ENGINEER_FAIL: {
            return {
                ...state,
                error: action.payload
            };
        }

        case engineersActions.EngineerActionTypes.CREATE_ENGINEER_SUCCESS: {
            return engineerAdapter.addOne(action.payload, state);
        }

        case engineersActions.EngineerActionTypes.CREATE_ENGINEER_FAIL: {
            return {
                ...state,
                error: action.payload
            };
        }

        case engineersActions.EngineerActionTypes.UPDATE_ENGINEER_SUCCESS: {
            return engineerAdapter.updateOne(action.payload, state);
        }

        case engineersActions.EngineerActionTypes.UPDATE_ENGINEER_FAIL: {
            return {
                ...state,
                error: action.payload
            };
        }


        default: {
            return state;
        }
    }
    }

const getEngineerFeatureState = createFeatureSelector<EngineerState>(
    'engineers'
);

export const getEngineers = createSelector(
    getEngineerFeatureState,
    engineerAdapter.getSelectors().selectAll
);

export const getEngineersLoading = createSelector(
    getEngineerFeatureState,
    (state: EngineerState) => state.loading
);

export const getEngineersLoaded = createSelector(
    getEngineerFeatureState,
    (state: EngineerState) => state.loaded
);

export const getEngineersError = createSelector(
    getEngineerFeatureState,
    (state: EngineerState) => state.error
);

export const getCurrentEngineerId = createSelector(
    getEngineerFeatureState,
    (state: EngineerState) => state.selectedEngineerId
);

export const getCurrentEngineer = createSelector(
    getEngineerFeatureState,
    getCurrentEngineerId,
    state => state.entities[state.selectedEngineerId]
);

