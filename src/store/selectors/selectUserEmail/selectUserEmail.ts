import { AppRootState } from 'store/types';

export const selectUserEmail = (state: AppRootState): string => {
    return state.auth.authUserData.email;
};
