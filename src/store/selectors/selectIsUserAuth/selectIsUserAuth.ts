import { AppRootState } from 'store/types';

export const selectIsUserAuth = (state: AppRootState): boolean => {
    return state.auth.isUserAuth;
};
