import { AppRootState } from 'store/types';
import { Nullable } from 'types';

export const selectPackCover = (state: AppRootState): Nullable<string> => {
    return state.cards.packDeckCover;
};
