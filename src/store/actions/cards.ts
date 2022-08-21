import { SET_CARDS, SET_CARDS_PACK_NAME } from './constants';
import { SetCardsPackNameType, SetCardsType } from './types';

import { CardType } from 'api/types';

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

export const setCardsPackNameAC = (packName: string): SetCardsPackNameType => {
    return {
        type: SET_CARDS_PACK_NAME,
        payload: { packName },
    } as const;
};
