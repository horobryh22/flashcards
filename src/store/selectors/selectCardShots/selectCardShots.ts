import { AppRootState } from 'store/types';

export const selectCardShots = (state: AppRootState): number => {
    return state.packs.selectedCardsPack.shots;
};
