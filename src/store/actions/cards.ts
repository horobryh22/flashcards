import {
    CLEAR_PACK_USER_ID,
    SET_CARD_CURRENT_PAGE,
    SET_CARD_PAGE_COUNT,
    SET_CARD_QUESTION,
    SET_CARDS,
    SET_CARDS_PACK_ID,
    SET_CARDS_SEARCH_PARAMS,
    SET_IS_PACK_DELETED,
    UPDATE_PACK_DATA,
} from './constants';
import {
    ClearPackUserId,
    SetCardCurrentPage,
    SetCardPageCount,
    SetCardQuestion,
    SetCardsPackId,
    SetCardsSearchParams,
    SetCardsType,
    SetIsPackDeleted,
    UpdatePackDataType,
} from './types';

import { CardsSearchParams, GetCardsResponseType } from 'api/types';
import { Nullable } from 'types';

export const setCardsAC = (data: GetCardsResponseType): SetCardsType => {
    return {
        type: SET_CARDS,
        payload: { data },
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

export const setCardCurrentPageAC = (page: number): SetCardCurrentPage => {
    return {
        type: SET_CARD_CURRENT_PAGE,
        payload: { page },
    } as const;
};

export const setCardPageCountAC = (pageCount: number): SetCardPageCount => {
    return {
        type: SET_CARD_PAGE_COUNT,
        payload: { pageCount },
    } as const;
};

export const clearPackUserIdAC = (): ClearPackUserId => {
    return {
        type: CLEAR_PACK_USER_ID,
    } as const;
};

export const updatePackDataAC = (
    name: string,
    deckCover: Nullable<string>,
    packPrivate: boolean,
): UpdatePackDataType => {
    return {
        type: UPDATE_PACK_DATA,
        payload: {
            name,
            deckCover,
            packPrivate,
        },
    } as const;
};

export const setIsPackDeletedAC = (isPackDeleted: boolean): SetIsPackDeleted => {
    return {
        type: SET_IS_PACK_DELETED,
        payload: {
            isPackDeleted,
        },
    } as const;
};
