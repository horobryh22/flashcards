import { AppRootState } from 'store/types';

export const selectUserName = (state: AppRootState): string => {
    return state.auth.authUserData.name;
};
