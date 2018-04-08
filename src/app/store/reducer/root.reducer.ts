// import {combineReducersEnhanced} from '';
 import { Tags } from './tags.reducer';
import { combineReducers, ActionReducerMap } from '@ngrx/store';
import { ApplicationState } from '../application-state';
// import {Log} from './../../store/reducers/logs.reducer';
// import { uiState } from './uiStateReducer';
// import { SecurityPolicies } from 'app/store/reducers/security-policies.reducer';
// import { ApplicationsReducer } from 'app/store/reducers/applications.reducer';




const rootReducer: ActionReducerMap<ApplicationState> = {
        Tags
};

const enhancedRootReducer = combineReducers(rootReducer);

export function reducer(state, action) {
    return enhancedRootReducer(state, action);
}