import { AppRootState } from 'store/types';

// export const selectCardsPageCount = (state: AppRootState): number => {
//     return state.cards.searchParams.pageCount;
// };

export const selectCardsPageCount = (state: AppRootState): number => {
    return state.cards.pageCount;
};
