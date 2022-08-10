import { AppRootState } from 'store/types';

export const selectMax = (state: AppRootState): number => {
    return state.packs.searchParams.max;
};
