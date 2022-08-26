import { AppRootState } from 'store/types';

export const selectCardsPackName = (state: AppRootState): string => {
    return state.cards.packName;
};
