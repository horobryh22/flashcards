import { AxiosError } from 'axios';

import { cardsAPI } from 'api';
import { REQUEST_STATUS } from 'enums';
import { setAppStatusAC, setCardsAC } from 'store/actions';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils';

export const fetchCards = (): AppThunkType => async (dispatch, getState) => {
    try {
        dispatch(setAppStatusAC(REQUEST_STATUS.LOADING));

        const { min } = getState().cards.searchParams;
        const { max } = getState().cards.searchParams;
        const { page } = getState().cards.searchParams;
        const { pageCount } = getState().cards.searchParams;
        const { cardsPack_id } = getState().cards.searchParams;
        const { cardQuestion } = getState().cards.searchParams;
        const { sortCards } = getState().cards.searchParams;
        const { cardAnswer } = getState().cards.searchParams;

        const { data } = await cardsAPI.fetchCards({
            min,
            max,
            page,
            pageCount,
            cardsPack_id,
            cardQuestion,
            sortCards,
            cardAnswer,
        });

        dispatch(setCardsAC(data));
    } catch (e) {
        errorHandler(e as Error | AxiosError, dispatch);
    } finally {
        dispatch(setAppStatusAC(REQUEST_STATUS.IDLE));
    }
};
