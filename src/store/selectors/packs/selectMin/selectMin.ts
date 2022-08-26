import { AppRootState } from 'store/types';

export const selectMin = (state: AppRootState): number => {
    return state.packs.searchParams.min;
};
