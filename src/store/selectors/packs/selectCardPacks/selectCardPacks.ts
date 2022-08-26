import { PackType } from 'api/types';
import { AppRootState } from 'store/types';

export const selectCardPacks = (state: AppRootState): PackType[] => {
    return state.packs.cardPacks;
};
