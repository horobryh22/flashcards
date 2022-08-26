import { AppRootState } from 'store/types';

export const selectIsPackDeleted = (state: AppRootState): boolean => {
    return state.cards.isPackDeleted;
};
