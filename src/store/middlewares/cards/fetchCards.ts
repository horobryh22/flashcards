import { AxiosError } from 'axios';

import { cardsAPI } from 'api';
import { REQUEST_STATUS } from 'enums';
import { setAppStatusAC, setCardsAC } from 'store/actions';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils';

export const fetchCards = (): AppThunkType => async (dispatch, getState) => {
    try {
        dispatch(setAppStatusAC(REQUEST_STATUS.LOADING));

        const params = getState().cards.searchParams;

        const { data } = await cardsAPI.fetchCards(params);

        dispatch(setCardsAC(data));
    } catch (e) {
        errorHandler(e as Error | AxiosError, dispatch);
    } finally {
        dispatch(setAppStatusAC(REQUEST_STATUS.IDLE));
    }
};
