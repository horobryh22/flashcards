import { SortTypes } from 'api/types';
import { SET_SORT_CARDS } from 'store/actions/constants';

export type SetSortCards = {
    type: typeof SET_SORT_CARDS;
    payload: { sort: SortTypes };
};
