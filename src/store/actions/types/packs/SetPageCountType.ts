import { SET_PAGE_COUNT } from 'store/actions/constants';

export type SetPageCountType = {
    type: typeof SET_PAGE_COUNT;
    payload: { pageCount: number };
};
