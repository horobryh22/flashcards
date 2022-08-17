import { AxiosError } from 'axios';

import { packsAPI } from 'api/packs/packsAPI';
import { PACKS_STATUS, REQUEST_STATUS } from 'enums';
import {
    setAppStatusAC,
    setCardPacksAC,
    setPacksStatusAC,
    setPacksTotalCountAC,
} from 'store/actions';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils';

export const fetchPacks = (): AppThunkType => async (dispatch, getState) => {
    try {
        dispatch(setAppStatusAC(REQUEST_STATUS.LOADING));
        dispatch(setPacksStatusAC(PACKS_STATUS.LOADING));

        const { packName } = getState().packs.searchParams;
        const { min } = getState().packs.searchParams;
        const { max } = getState().packs.searchParams;
        const { sortPacks } = getState().packs.searchParams;
        const { page } = getState().packs.searchParams;
        const { user_id } = getState().packs.searchParams;
        const { pageCount } = getState().packs.searchParams;

        const response = await packsAPI.fetchPacks({
            packName,
            sortPacks,
            page,
            pageCount,
            user_id,
            min,
            max,
        });

        dispatch(setCardPacksAC(response.data.cardPacks));
        dispatch(setPacksTotalCountAC(response.data.cardPacksTotalCount));
        dispatch(setPacksStatusAC(PACKS_STATUS.SUCCESS));
    } catch (e) {
        errorHandler(e as Error | AxiosError, dispatch);
        dispatch(setPacksStatusAC(PACKS_STATUS.ERROR));
    } finally {
        dispatch(setAppStatusAC(REQUEST_STATUS.IDLE));
        dispatch(setPacksStatusAC(PACKS_STATUS.IDLE));
    }
};
