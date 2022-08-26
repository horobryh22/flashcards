import { AppRootState } from 'store/types';

export const selectCardsPackId = (state: AppRootState): string => {
    return state.cards.searchParams.cardsPack_id;
};
