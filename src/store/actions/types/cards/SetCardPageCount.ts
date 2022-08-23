import { SET_CARD_PAGE_COUNT } from 'store/actions/constants';

export type SetCardPageCount = {
    type: typeof SET_CARD_PAGE_COUNT;
    payload: { pageCount: number };
};
