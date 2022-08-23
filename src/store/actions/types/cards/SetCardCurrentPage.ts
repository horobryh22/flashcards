import { SET_CARD_CURRENT_PAGE } from 'store/actions/constants';

export type SetCardCurrentPage = {
    type: typeof SET_CARD_CURRENT_PAGE;
    payload: { page: number };
};
