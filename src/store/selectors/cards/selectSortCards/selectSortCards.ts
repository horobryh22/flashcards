import { SortTypes } from 'api/types';
import { AppRootState } from 'store/types';

export const selectSortCards = (state: AppRootState): SortTypes => {
    return state.cards.searchParams.sortCards;
};
