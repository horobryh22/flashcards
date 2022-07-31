import { AxiosError } from 'axios';

import { authAPI } from 'api';
import { setIsInitializedAC, setIsUserAuthAC, setUsersAC } from 'store/actions';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils';

export const initializedApp = (): AppThunkType => async (dispatch, getState) => {
    try {
        const data = await authAPI.me();

        dispatch(setUsersAC(data.data));
        dispatch(setIsUserAuthAC(true));
    } catch (e) {
        const { isUserAuth } = getState().auth;

        if (isUserAuth) {
            errorHandler(e as Error | AxiosError, dispatch);
        }
    } finally {
        dispatch(setIsInitializedAC(true));
    }
};
