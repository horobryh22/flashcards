import { AppRootState } from 'store/types';

export const selectPageCount = (state: AppRootState): number => {
    return state.packs.searchParams.pageCount;
};
