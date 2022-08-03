import { SET_CARD_PACKS, SET_SORT_PACKS } from './constants';
import { SetCardPacksType, SetSortPacksType } from './types';

import { CardType, SortTypes } from 'api/types';

export const setCardPacksAC = (cardPacks: CardType[]): SetCardPacksType => {
    return {
        type: SET_CARD_PACKS,
        payload: { cardPacks },
    } as const;
};

export const setSortPacksAC = (sort: SortTypes): SetSortPacksType => {
    return {
        type: SET_SORT_PACKS,
        payload: { sort },
    } as const;
};
