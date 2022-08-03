import { AxiosError } from 'axios';

import { authAPI } from 'api';
import { REQUEST_STATUS } from 'enums';
import { setAuthInfoAC, setGoToLoginAC, setAppStatusAC } from 'store/actions';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils';

export const setNewPassword =
    (password: string, resetPasswordToken: string): AppThunkType =>
    async dispatch => {
        try {
            dispatch(setAppStatusAC(REQUEST_STATUS.LOADING));
            const response = await authAPI.setNewPassword(password, resetPasswordToken);

            dispatch(setAuthInfoAC(response.data.info));
            dispatch(setGoToLoginAC(true));
        } catch (e) {
            errorHandler(e as Error | AxiosError, dispatch);
        } finally {
            dispatch(setAppStatusAC(REQUEST_STATUS.IDLE));
        }
    };
