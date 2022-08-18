import { SortTypes } from 'api/types';
import { SET_SORT_PACKS } from 'store/actions/constants';

export type SetSortPacksType = {
    type: typeof SET_SORT_PACKS;
    payload: { sort: SortTypes };
};
