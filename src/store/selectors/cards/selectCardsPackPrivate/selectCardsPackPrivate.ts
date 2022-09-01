import { AppRootState } from 'store/types';

export const selectCardsPackPrivate = (state: AppRootState): boolean => {
    return state.cards.packPrivate;
};
