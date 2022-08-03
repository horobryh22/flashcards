import { AppRootState } from 'store/types';

export const selectAuthUserId = (state: AppRootState): string => {
    return state.auth.authUserData._id;
};
