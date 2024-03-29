import { AxiosError } from 'axios';

import { packsAPI } from 'api/packs/packsAPI';
import { REQUEST_STATUS } from 'enums';
import { setAppStatusAC, setCardPacksAC, setIsPackDeletedAC } from 'store/actions';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils';

export const fetchPacks = (): AppThunkType => async (dispatch, getState) => {
    try {
        dispatch(setAppStatusAC(REQUEST_STATUS.LOADING));

        const { packName } = getState().packs.searchParams;
        const { min } = getState().packs.searchParams;
        const { max } = getState().packs.searchParams;
        const { sortPacks } = getState().packs.searchParams;
        const { page } = getState().packs.searchParams;
        const { user_id } = getState().packs.searchParams;
        const { pageCount } = getState().packs.searchParams;

        const { data } = await packsAPI.fetchPacks({
            packName,
            sortPacks,
            page,
            pageCount,
            user_id,
            min,
            max,
        });

        const { cardPacks, cardPacksTotalCount } = data;

        dispatch(setCardPacksAC(cardPacks, cardPacksTotalCount));
        dispatch(setIsPackDeletedAC(false));
    } catch (e) {
        errorHandler(e as Error | AxiosError, dispatch);
    } finally {
        dispatch(setAppStatusAC(REQUEST_STATUS.IDLE));
    }
};
