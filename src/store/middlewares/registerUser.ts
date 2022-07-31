import { AxiosError } from 'axios';

import { authAPI } from 'api';
import { RegisterUserDataType } from 'api/types';
import { REQUEST_STATUS } from 'enums';
import { setAppStatusAC } from 'store/actions/app';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils';

export const registerUser =
    ({ email, password }: RegisterUserDataType): AppThunkType =>
    async dispatch => {
        try {
            dispatch(setAppStatusAC(REQUEST_STATUS.LOADING));
            await authAPI.register({ email, password });
        } catch (e) {
            errorHandler(e as Error | AxiosError, dispatch);
        } finally {
            dispatch(setAppStatusAC(REQUEST_STATUS.IDLE));
        }
    };
