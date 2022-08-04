import { SearchParamsCardsType } from 'api/types';
import { GetCardsType } from 'api/types/cards/GetCardType/GetCardsType';
import { SET_CARDS, SET_CARDS_SEARCH_PARAMS } from 'store/actions/constants';
import { SetCardsType } from 'store/actions/types';
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
    };
};
