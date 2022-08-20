import { SET_CARDS } from './constants';

import { CardType } from 'api/types';
import { SetCardsType } from 'store/actions/types';

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
