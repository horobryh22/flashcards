import { AppRootState } from 'store/types';

export const selectPacksInitialized = (state: AppRootState): boolean => {
    return state.packs.isInitialized;
};
