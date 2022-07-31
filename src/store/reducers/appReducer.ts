import { AppStateType } from './types';

import { REQUEST_STATUS } from 'enums';
import { AppActionsType } from 'store/actions';
import { SET_APP_STATUS, SET_IS_INITIALIZED } from 'store/actions/constants';

const initialState: AppStateType = {
    isInitialized: false,
    error: null,
    status: REQUEST_STATUS.IDLE,
};

export const appReducer = (
    state = initialState,
    action: AppActionsType,
): AppStateType => {
    switch (action.type) {
        case SET_IS_INITIALIZED:
            return { ...state, isInitialized: action.payload.isInitialized };
        case SET_APP_STATUS:
            return { ...state, status: action.payload.status };
        default:
            return state;
    }
};
