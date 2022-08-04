import { AxiosError } from 'axios';

import { userAPI } from 'api';
import { UpdateUserDataType } from 'api/types';
import { REQUEST_STATUS } from 'enums';
import { setAppStatusAC, setAuthUserDataAC } from 'store/actions';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils';

export const updateUserData =
    ({ name, avatar }: UpdateUserDataType): AppThunkType =>
    async dispatch => {
        try {
            dispatch(setAppStatusAC(REQUEST_STATUS.LOADING));
            const data = await userAPI.updateUserData({ name, avatar });

            dispatch(setAuthUserDataAC(data.data.updatedUser));
        } catch (e) {
            errorHandler(e as Error | AxiosError, dispatch);
        } finally {
            dispatch(setAppStatusAC(REQUEST_STATUS.IDLE));
        }
    };
