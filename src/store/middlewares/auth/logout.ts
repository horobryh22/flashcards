import { AxiosError } from 'axios';

import { authAPI } from 'api';
import { REQUEST_STATUS } from 'enums';
import { setAppStatusAC, setIsUserAuthAC, setUsersAC } from 'store/actions';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils';

export const logout = (): AppThunkType => async dispatch => {
    try {
        dispatch(setAppStatusAC(REQUEST_STATUS.LOADING));
        await authAPI.logout();
        dispatch(setIsUserAuthAC(false));
        dispatch(
            setUsersAC({
                email: '',
                error: '',
                avatar: '',
                _id: '',
                name: '',
                isAdmin: false,
                rememberMe: false,
                verified: false,
                publicCardPacksCount: 0,
            }),
        );
    } catch (e) {
        errorHandler(e as Error | AxiosError, dispatch);
    } finally {
        dispatch(setAppStatusAC(REQUEST_STATUS.IDLE));
    }
};
