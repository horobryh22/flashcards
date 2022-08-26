import { AppRootState } from 'store/types';

export const selectAvatar = (state: AppRootState): string => {
    return state.auth.authUserData.avatar as string;
};
