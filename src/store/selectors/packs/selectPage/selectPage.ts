import { AppRootState } from 'store/types';

export const selectPage = (state: AppRootState): number => {
    return state.packs.searchParams.page;
};
