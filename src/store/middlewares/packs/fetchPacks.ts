import { AxiosError } from 'axios';

import { packsAPI } from 'api/packs/packsAPI';
import { SortTypes } from 'api/types';
import { REQUEST_STATUS } from 'enums';
import { setAppStatusAC, setCardPacksAC, setPacksTotalCountAC } from 'store/actions';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils';

export const fetchPacks =
    (
        paramId?: string,
        paramMin?: string,
        paramMax?: string,
        paramPackName?: string,
        paramSort?: SortTypes,
        paramPage?: string,
        paramPageCount?: string,
    ): AppThunkType =>
    async (dispatch, getState) => {
        try {
            dispatch(setAppStatusAC(REQUEST_STATUS.LOADING));

            const packName = paramPackName || getState().packs.searchParams.packName;
            const min = Number(paramMin) || getState().packs.searchParams.min;
            const max = Number(paramMax) || getState().packs.searchParams.max;
            const sortPacks = paramSort || getState().packs.searchParams.sortPacks;
            const page = Number(paramPage) || getState().packs.searchParams.page;
            const user_id = paramId || getState().packs.searchParams.user_id;
            const pageCount =
                Number(paramPageCount) || getState().packs.searchParams.pageCount;

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
        } catch (e) {
            errorHandler(e as Error | AxiosError, dispatch);
        } finally {
            dispatch(setAppStatusAC(REQUEST_STATUS.IDLE));
        }
    };
