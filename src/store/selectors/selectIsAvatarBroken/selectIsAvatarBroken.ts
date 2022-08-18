import { AppRootState } from 'store/types';

export const selectIsAvatarBroken = (state: AppRootState): boolean => {
    return state.auth.isAvatarBroken;
};
