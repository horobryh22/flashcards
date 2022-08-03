import { CardType } from 'api/types';
import { AppRootState } from 'store/types';

export const selectCardPacks = (state: AppRootState): CardType[] => {
    return state.packs.cardPacks;
};
