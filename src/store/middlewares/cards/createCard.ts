import { AxiosError } from 'axios';

import { cardsApi } from 'api/cards/cardsApi';
import { CardsType } from 'api/types/cards/GetCardType/GetCardsType';
import { REQUEST_STATUS } from 'enums';
import { setAppStatusAC } from 'store/actions';
import { fetchCards } from 'store/middlewares/cards/fetchCards';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils';

export const createCard =
    (card: CardsType): AppThunkType =>
    async (dispatch, getState) => {
        const { cardsPack_id } = getState().cards;

        const newCard = { ...card, cardsPack_id };

        try {
            dispatch(setAppStatusAC(REQUEST_STATUS.LOADING));
            await cardsApi.createCard(newCard);
            dispatch(fetchCards(cardsPack_id));
        } catch (e) {
            errorHandler(e as Error | AxiosError, dispatch);
        } finally {
            dispatch(setAppStatusAC(REQUEST_STATUS.IDLE));
        }
    };
