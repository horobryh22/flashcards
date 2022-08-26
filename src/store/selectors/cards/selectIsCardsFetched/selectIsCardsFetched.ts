import { AppRootState } from 'store/types';

export const selectIsCardsFetched = (state: AppRootState): boolean => {
    return state.cards.isCardsFetched;
};
