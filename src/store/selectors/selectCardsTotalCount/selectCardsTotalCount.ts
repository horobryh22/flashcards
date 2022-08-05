import { AppRootState } from 'store/types';

export const selectCardsTotalCount = (state: AppRootState): number => {
    return state.cards.cardsTotalCount;
};
