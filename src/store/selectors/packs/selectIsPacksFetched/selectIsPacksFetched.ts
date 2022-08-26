import { AppRootState } from 'store/types';

export const selectIsPacksFetched = (state: AppRootState): boolean => {
    return state.packs.isPacksFetched;
};
