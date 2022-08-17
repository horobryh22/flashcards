import {
    SET_CARD_PACKS,
    SET_CARDS_RANGE,
    SET_CURRENT_PAGE,
    SET_IS_MY_CARDS,
    SET_PACK_NAME,
    SET_PACKS_TOTAL_COUNT,
    SET_PAGE_COUNT,
    SET_SELECTED_CARDS_PACK,
    SET_SEARCH_PARAMS,
    SET_SEARCH_USER_ID,
    SET_SORT_PACKS,
    SET_PACKS_STATUS,
} from './constants';
import {
    SetCardPacksType,
    SetCardsRangeType,
    SetCurrentPageType,
    SetPackNameType,
    SetPacksTotalCount,
    SetPageCountType,
    SetSelectedCardsPackType,
    SetSearchParamsType,
    SetSearchUserId,
    SetSortPacksType,
    SetPacksStatus,
} from './types';

import { CardType, SortTypes, SearchParamsType } from 'api/types';
import { PACKS_STATUS } from 'enums';
import { SetIsPackType } from 'store/actions/types/SetMyAllCardsType';

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

export const setIsMyPackAC = (isMyPack: boolean): SetIsPackType => {
    return {
        type: SET_IS_MY_CARDS,
        payload: { isMyPack },
    } as const;
};

export const setSelectedCardPackAC = (pack: CardType): SetSelectedCardsPackType => {
    return {
        type: SET_SELECTED_CARDS_PACK,
        payload: { pack },
    };
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

export const setSearchParamsAC = (params: SearchParamsType): SetSearchParamsType => {
    return {
        type: SET_SEARCH_PARAMS,
        payload: { params },
    } as const;
};

export const setPacksStatusAC = (status: PACKS_STATUS): SetPacksStatus => {
    return {
        type: SET_PACKS_STATUS,
        payload: { status },
    } as const;
};
