import axios, { AxiosError } from 'axios';

import { AppDispatch } from 'store';
import { setAuthErrorAC } from 'store/actions';

export const errorHandler = (err: Error | AxiosError, dispatch: AppDispatch): void => {
    if (axios.isAxiosError(err)) {
        const error = err.response?.data
            ? (err.response.data as { error: string }).error
            : err.message;

        dispatch(setAuthErrorAC(error));
    } else {
        dispatch(setAuthErrorAC('Some error'));
    }
};
