import { SET_CURRENT_PAGE } from 'store/actions/constants';

export type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE;
    payload: { page: number };
};
