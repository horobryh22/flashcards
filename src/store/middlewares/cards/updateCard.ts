import { AxiosError } from 'axios';

import { cardsApi } from 'api/cards/cardsApi';
import { SearchParamsCardsType } from 'api/types';
import { CardsType } from 'api/types/cards/GetCardType/GetCardsType';
import { REQUEST_STATUS } from 'enums';
import { setAppStatusAC } from 'store/actions';
import { fetchCards } from 'store/middlewares/cards/fetchCards';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils';

export const updateCard =
    (card: CardsType, cardsPack_id: SearchParamsCardsType): AppThunkType =>
    async dispatch => {
        try {
            dispatch(setAppStatusAC(REQUEST_STATUS.LOADING));
            await cardsApi.updateCard(card);
            dispatch(fetchCards(cardsPack_id));
        } catch (e) {
            errorHandler(e as Error | AxiosError, dispatch);
        } finally {
            dispatch(setAppStatusAC(REQUEST_STATUS.IDLE));
        }
    };
