// const initialState = {
//     engineers: [{
//         idEngineers: '1',
//         Name: 'Aivis',
//         LastName: 'Steinfelds',
//         PhoneNumber: '22022840',
//         Country: 'LV',
//         Company: 'TELE2',
//         Registered: '08/05/1993'
//     }],
//     loading: false,
//     loaded: true
// };

// export function EngineerReducer (state = initialState, action) {
//     switch (action.type) {
//         case 'LOAD_ENGINEER': {
//             return {
//                 ...state,
//                 loading: true,
//                 loaded: false
//             };
//         }

//         default: {
//             return state;
//         }
//     }
// }

import * as engineersActions from '../actions/engineer.actions';
import { Engineer } from '../../root-store/models/engineer.model';
import * as fromRoot from '../../state/app-state';

export interface EngineerState {
    engineers: Engineer[];
    loading: boolean;
    loaded: boolean;
    error: string;
}

export interface AppState extends fromRoot.AppState {
    engineers: EngineerState;
}

export const initialState: EngineerState = {
    engineers: [],
    loading: false,
    loaded: false,
    error: '',
}

export function engineerReducer(
    state = initialState,
    action: engineersActions.Action): EngineerState {
            switch (action.type) {
        case engineersActions.EngineerActionTypes.LOAD_ENGINEERS: {
            return {
                ...state,
                loading: true,
            };
        }
        case engineersActions.EngineerActionTypes.LOAD_ENGINEERS_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                engineers: action.payload
            };
        }
        case engineersActions.EngineerActionTypes.LOAD_ENGINEERS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload
            };
        }

        default: {
            return state;
        }
    }
    }


