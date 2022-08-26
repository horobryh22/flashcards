import { AppRootState } from 'store/types';

export const selectPackName = (state: AppRootState): string => {
    return state.packs.searchParams.packName;
};
