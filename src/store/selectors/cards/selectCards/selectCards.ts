import { CardType } from 'api/types';
import { AppRootState } from 'store/types';

export const selectCards = (state: AppRootState): CardType[] => {
    return state.cards.cards;
};
