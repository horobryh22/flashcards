import { SearchParamsCardsType } from 'api/types';
import { SET_CARDS_SEARCH_PARAMS } from 'store/actions/constants';

export type SetCardsSearchParamsACType = {
    type: typeof SET_CARDS_SEARCH_PARAMS;
    payload: {
        searchParams: SearchParamsCardsType;
    };
};
