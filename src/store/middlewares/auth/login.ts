import { AxiosError } from 'axios';

import { authAPI } from 'api';
import { REQUEST_STATUS } from 'enums';
import { SignInValuesType } from 'pages';
import { setIsUserAuthAC, setAuthUserDataAC, setAppStatusAC } from 'store/actions';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils';

export const login =
    (data: SignInValuesType): AppThunkType =>
    async dispatch => {
        try {
            dispatch(setAppStatusAC(REQUEST_STATUS.LOADING));
            const response = await authAPI.login(data);

            dispatch(setAuthUserDataAC(response.data));
            dispatch(setIsUserAuthAC(true));
        } catch (e) {
            errorHandler(e as Error | AxiosError, dispatch);
        } finally {
            dispatch(setAppStatusAC(REQUEST_STATUS.IDLE));
        }
    };
