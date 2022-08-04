import { AxiosError } from 'axios';

import { cardsApi } from 'api/cards/cardsApi';
import { SearchParamsCardsType } from 'api/types';
import { REQUEST_STATUS } from 'enums';
import { setAppStatusAC } from 'store/actions';
import { setCardsAC } from 'store/actions/cards';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils';

export const fetchCards =
    ({ cardsPack_id }: SearchParamsCardsType): AppThunkType =>
    async (dispatch, getState) => {
        try {
            dispatch(setAppStatusAC(REQUEST_STATUS.LOADING));

            const { cardAnswer, max, min, page, pageCount, cardQuestion, sortCards } =
                getState().cards.searchParams;
            const response = await cardsApi.getCard({
                cardsPack_id,
                cardAnswer,
                max,
                min,
                page,
                pageCount,
                cardQuestion,
                sortCards,
            });

            dispatch(setCardsAC(response.data));
        } catch (error) {
            errorHandler(error as Error | AxiosError, dispatch);
        } finally {
            dispatch(setAppStatusAC(REQUEST_STATUS.IDLE));
        }
    };
