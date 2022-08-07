import { AxiosError } from 'axios';

import { packsAPI } from 'api/packs/packsAPI';
import { CardsPackType } from 'api/types';
import { REQUEST_STATUS } from 'enums';
import { setAppStatusAC } from 'store/actions';
import { fetchPacks } from 'store/middlewares';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils';

export const addCardsPack =
    (values: CardsPackType): AppThunkType =>
    async dispatch => {
        try {
            dispatch(setAppStatusAC(REQUEST_STATUS.LOADING));

            await packsAPI.addCardsPack({
                cardsPack: values,
            });

            dispatch(fetchPacks());
        } catch (e) {
            errorHandler(e as Error | AxiosError, dispatch);
        } finally {
            dispatch(setAppStatusAC(REQUEST_STATUS.IDLE));
        }
    };
