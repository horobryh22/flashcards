import { AppRootState } from 'store/types';

export const selectCardQuestion = (state: AppRootState): string => {
    return state.cards.searchParams.cardQuestion;
};
