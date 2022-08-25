import { AxiosError } from 'axios';

import { packsAPI } from 'api/packs/packsAPI';
import { REQUEST_STATUS } from 'enums';
import { setAppStatusAC, setIsPackDeletedAC } from 'store/actions';
import { fetchPacks } from 'store/middlewares';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils';

export const removeCardsPack =
    (packId: string): AppThunkType =>
    async (dispatch, getState) => {
        try {
            dispatch(setAppStatusAC(REQUEST_STATUS.LOADING));

            const { isPacksFetched } = getState().packs;

            await packsAPI.removeCardsPack(packId);

            dispatch(setIsPackDeletedAC(true));

            if (isPacksFetched) {
                dispatch(fetchPacks());
            }
        } catch (e) {
            errorHandler(e as Error | AxiosError, dispatch);
        } finally {
            dispatch(setAppStatusAC(REQUEST_STATUS.IDLE));
        }
    };
