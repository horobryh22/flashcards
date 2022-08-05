import { SET_CARDS_PAGE } from 'store/actions/constants';

export type SetCardsPageType = {
    type: typeof SET_CARDS_PAGE;
    payload: { page: number };
};
