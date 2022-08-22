import {
    SET_CARD_QUESTION,
    SET_CARDS,
    SET_CARDS_PACK_ID,
    SET_CARDS_SEARCH_PARAMS,
} from './constants';
import {
    SetCardQuestion,
    SetCardsPackId,
    SetCardsSearchParams,
    SetCardsType,
} from './types';

import { CardsSearchParams, CardType } from 'api/types';

export const setCardsAC = (
    cards: CardType[],
    cardsTotalCount: number,
    packUserId: string,
): SetCardsType => {
    return {
        type: SET_CARDS,
        payload: { cards, cardsTotalCount, packUserId },
    } as const;
};

export const setCardsPackIdAC = (cardsPackId: string): SetCardsPackId => {
    return {
        type: SET_CARDS_PACK_ID,
        payload: { cardsPackId },
    } as const;
};

export const setCardsSearchParamsAC = (
    params: CardsSearchParams,
): SetCardsSearchParams => {
    return {
        type: SET_CARDS_SEARCH_PARAMS,
        payload: { params },
    } as const;
};

export const setCardQuestionAC = (cardQuestion: string): SetCardQuestion => {
    return {
        type: SET_CARD_QUESTION,
        payload: { cardQuestion },
    } as const;
};
