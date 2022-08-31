import { AxiosError } from 'axios';

import { cardsAPI } from 'api';
import { REQUEST_STATUS } from 'enums';
import { setAppStatusAC } from 'store/actions';
import { fetchCards } from 'store/middlewares';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils';

export const addCard =
    (
        question: string,
        answer: string,
        cardsPack_id: string,
        answerImg: string,
        questionImg: string,
    ): AppThunkType =>
    async dispatch => {
        try {
            dispatch(setAppStatusAC(REQUEST_STATUS.LOADING));

            await cardsAPI.addCard({
                card: { answer, question, cardsPack_id, answerImg, questionImg },
            });

            dispatch(fetchCards());
        } catch (e) {
            errorHandler(e as Error | AxiosError, dispatch);
        } finally {
            dispatch(setAppStatusAC(REQUEST_STATUS.IDLE));
        }
    };
