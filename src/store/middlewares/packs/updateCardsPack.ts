import { AxiosError } from 'axios';

import { packsAPI } from 'api/packs/packsAPI';
import { REQUEST_STATUS } from 'enums';
import { setAppStatusAC, updatePackDataAC } from 'store/actions';
import { fetchPacks } from 'store/middlewares';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils';

export const updateCardsPack =
    (
        id: string,
        packTitle: string,
        packPrivate: boolean,
        packCover?: string,
    ): AppThunkType =>
    async dispatch => {
        try {
            dispatch(setAppStatusAC(REQUEST_STATUS.LOADING));

            await packsAPI.updateCardsPack({
                cardsPack: {
                    name: packTitle,
                    _id: id,
                    private: packPrivate,
                    deckCover: packCover,
                },
            });

            dispatch(fetchPacks());
            dispatch(updatePackDataAC(packTitle, packCover || '', packPrivate));
        } catch (e) {
            errorHandler(e as Error | AxiosError, dispatch);
        } finally {
            dispatch(setAppStatusAC(REQUEST_STATUS.IDLE));
        }
    };
