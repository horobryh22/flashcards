import { SearchParamsCardsType } from 'api/types';
import { GetCardsType } from 'api/types/cards/GetCardType/GetCardsType';
import {
    SET_CARD_QUESTION,
    SET_CARDS,
    SET_CARDS_PACK_ID,
    SET_CARDS_PAGE,
    SET_CARDS_PAGE_COUNT,
    SET_CARDS_SEARCH_PARAMS,
} from 'store/actions/constants';
import { SetCardsType } from 'store/actions/types';
import { SetCardsPackIdType } from 'store/actions/types/SetCardsPackIdType';
import { SetCardsPageCountType } from 'store/actions/types/SetCardsPageCountType';
import { SetCardsPageType } from 'store/actions/types/SetCardsPageType';
import { SetCardsQuestionAC } from 'store/actions/types/SetCardsQuestionAC';
import { SetCardsSearchParamsACType } from 'store/actions/types/SetCardsSearchParamsACType';

export const setCardsAC = (data: GetCardsType): SetCardsType => {
    return {
        type: SET_CARDS,
        payload: { data },
    } as const;
};

export const setCardsSearchParamsAC = (
    searchParams: SearchParamsCardsType,
): SetCardsSearchParamsACType => {
    return {
        type: SET_CARDS_SEARCH_PARAMS,
        payload: { searchParams },
    } as const;
};

export const setCardsPackIdAC = (cardsPack_id: string): SetCardsPackIdType => {
    return {
        type: SET_CARDS_PACK_ID,
        payload: { cardsPack_id },
    } as const;
};
export const setCardsPageAC = (page: number): SetCardsPageType => {
    return {
        type: SET_CARDS_PAGE,
        payload: { page },
    };
};

export const setCardsPageCountAC = (pageCount: number): SetCardsPageCountType => {
    return {
        type: SET_CARDS_PAGE_COUNT,
        payload: { pageCount },
    };
};

export const setCardsQuestionAC = (question: string): SetCardsQuestionAC => {
    return {
        type: SET_CARD_QUESTION,
        payload: { question },
    };
};
