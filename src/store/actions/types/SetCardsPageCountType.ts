import { SET_CARDS_PAGE_COUNT } from 'store/actions/constants';

export type SetCardsPageCountType = {
    type: typeof SET_CARDS_PAGE_COUNT;
    payload: { pageCount: number };
};
