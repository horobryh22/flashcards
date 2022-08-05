import { AxiosError } from 'axios';

import { cardsApi } from 'api/cards/cardsApi';
import { REQUEST_STATUS } from 'enums';
import { setAppStatusAC } from 'store/actions';
import { setCardsAC, setCardsPackIdAC } from 'store/actions/cards';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils';

export const fetchCards =
    (cardsPack_id: string): AppThunkType =>
    async (dispatch, getState) => {
        try {
            dispatch(setAppStatusAC(REQUEST_STATUS.LOADING));

            const { cardAnswer } = getState().cards.searchParams;
            const { max } = getState().cards.searchParams;
            const { min } = getState().cards.searchParams;
            const { page } = getState().cards.searchParams;
            const { pageCount } = getState().cards.searchParams;
            const { cardQuestion } = getState().cards.searchParams;
            const { sortCards } = getState().cards.searchParams;

            const response = await cardsApi.getCard({
                cardsPack_id,
                cardQuestion,
                cardAnswer,
                max,
                min,
                page,
                pageCount,
                sortCards,
            });

            dispatch(setCardsAC(response.data));
            dispatch(setCardsPackIdAC(cardsPack_id));
        } catch (error) {
            errorHandler(error as Error | AxiosError, dispatch);
        } finally {
            dispatch(setAppStatusAC(REQUEST_STATUS.IDLE));
        }
    };
