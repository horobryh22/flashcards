import {
    SET_CARD_PACKS,
    SET_CARDS_RANGE,
    SET_CURRENT_PAGE,
    SET_PACK_NAME,
    SET_PACKS_TOTAL_COUNT,
    SET_PAGE_COUNT,
    SET_SEARCH_USER_ID,
    SET_SORT_PACKS,
} from './constants';
import {
    SetCardPacksType,
    SetCardsRangeType,
    SetCurrentPageType,
    SetPackNameType,
    SetPacksTotalCount,
    SetPageCountType,
    SetSearchUserId,
    SetSortPacksType,
} from './types';

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

export const setCurrentPageAC = (page: number): SetCurrentPageType => {
    return {
        type: SET_CURRENT_PAGE,
        payload: { page },
    } as const;
};

export const setPacksTotalCountAC = (packsTotalCount: number): SetPacksTotalCount => {
    return {
        type: SET_PACKS_TOTAL_COUNT,
        payload: { packsTotalCount },
    } as const;
};

export const setPageCountAC = (pageCount: number): SetPageCountType => {
    return {
        type: SET_PAGE_COUNT,
        payload: { pageCount },
    } as const;
};

export const setPackNameAC = (packName: string): SetPackNameType => {
    return {
        type: SET_PACK_NAME,
        payload: { packName },
    } as const;
};

export const setCardsRangeAC = (min: number, max: number): SetCardsRangeType => {
    return {
        type: SET_CARDS_RANGE,
        payload: { min, max },
    } as const;
};

export const setSearchUserIdAC = (id: string): SetSearchUserId => {
    return {
        type: SET_SEARCH_USER_ID,
        payload: { id },
    } as const;
};
