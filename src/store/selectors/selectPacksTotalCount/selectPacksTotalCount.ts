import { AppRootState } from 'store/types';

export const selectPacksTotalCount = (state: AppRootState): number => {
    return state.packs.cardPacksTotalCount;
};
