import { AppRootState } from 'store/types';

export const selectPacksPackCover = (state: AppRootState): string => {
    return state.packs.packCover;
};
