import {
    CLEAR_PACK_USER_ID,
    SET_ANSWER_COVER,
    SET_CARD_CURRENT_PAGE,
    SET_CARD_PAGE_COUNT,
    SET_CARD_QUESTION,
    SET_CARDS,
    SET_CARDS_PACK_ID,
    SET_CARDS_PACK_NAME,
    SET_CARDS_SEARCH_PARAMS,
    SET_IS_PACK_DELETED,
    SET_QUESTION_COVER,
    SET_SORT_CARDS,
    SET_UPDATED_CARD_GRADE,
    UPDATE_PACK_DATA,
} from './constants';
import {
    ClearPackUserId,
    SetAnswerCover,
    SetCardCurrentPage,
    SetCardPageCount,
    SetCardQuestion,
    SetCardsPackId,
    SetCardsPackName,
    SetCardsSearchParams,
    SetCardsType,
    SetIsPackDeleted,
    SetQuestionCover,
    SetSortCards,
    SetUpdatedCardGrade,
    UpdatePackDataType,
} from './types';

import {
    CardsSearchParams,
    GetCardsResponseType,
    SortTypes,
    UpdatedGradeType,
} from 'api/types';

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
    deckCover: string,
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

export const setSortCardsAC = (sort: SortTypes): SetSortCards => {
    return {
        type: SET_SORT_CARDS,
        payload: {
            sort,
        },
    } as const;
};

export const setCardsPackNameAC = (packName: string): SetCardsPackName => {
    return {
        type: SET_CARDS_PACK_NAME,
        payload: {
            packName,
        },
    } as const;
};

export const setUpdatedCardGradeAC = (
    updatedGrade: UpdatedGradeType,
): SetUpdatedCardGrade => {
    return {
        type: SET_UPDATED_CARD_GRADE,
        payload: {
            updatedGrade,
        },
    } as const;
};

export const setQuestionCoverAC = (cover: string): SetQuestionCover => {
    return {
        type: SET_QUESTION_COVER,
        payload: {
            cover,
        },
    } as const;
};

export const setAnswerCoverAC = (cover: string): SetAnswerCover => {
    return {
        type: SET_ANSWER_COVER,
        payload: {
            cover,
        },
    } as const;
};
