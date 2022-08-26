import { AppRootState } from 'store/types';

export const selectCardsPage = (state: AppRootState): number => {
    return state.cards.searchParams.page;
};
