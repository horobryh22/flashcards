import { AppRootState } from 'store/types';

export const selectPackUserId = (state: AppRootState): string => {
    return state.cards.packUserId;
};
