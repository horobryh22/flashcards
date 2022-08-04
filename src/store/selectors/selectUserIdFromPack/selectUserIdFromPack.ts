import { AppRootState } from 'store/types';

export const selectUserIdFromPack = (state: AppRootState): string => {
    return state.cards.packUserId;
};
