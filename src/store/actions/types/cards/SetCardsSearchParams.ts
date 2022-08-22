import { CardsSearchParams } from 'api/types';
import { SET_CARDS_SEARCH_PARAMS } from 'store/actions/constants';

export type SetCardsSearchParams = {
    type: typeof SET_CARDS_SEARCH_PARAMS;
    payload: { params: CardsSearchParams };
};
