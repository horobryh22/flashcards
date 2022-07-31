import { SET_APP_STATUS, SET_IS_INITIALIZED } from './constants';
import { SetAppStatusType, SetIsInitializedType } from './types';

import { REQUEST_STATUS } from 'enums';

export const setAppStatusAC = (status: REQUEST_STATUS): SetAppStatusType => {
    return {
        type: SET_APP_STATUS,
        payload: { status },
    } as const;
};

export const setIsInitializedAC = (isInitialized: boolean): SetIsInitializedType => {
    return {
        type: SET_IS_INITIALIZED,
        payload: { isInitialized },
    } as const;
};
