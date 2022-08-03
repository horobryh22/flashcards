import { SortTypes } from 'api/types';
import { AppRootState } from 'store/types';

export const selectSortPacks = (state: AppRootState): SortTypes => {
    return state.packs.searchParams.sortPacks;
};
