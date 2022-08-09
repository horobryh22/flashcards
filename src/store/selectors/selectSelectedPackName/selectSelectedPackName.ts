import { AppRootState } from 'store/types';

export const selectSelectedPackName = (state: AppRootState): string | null => {
    if (state.packs.selectedCardsPack) {
        return state.packs.selectedCardsPack.name;
    }

    return null;
};
