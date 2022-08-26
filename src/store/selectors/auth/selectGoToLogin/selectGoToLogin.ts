import { AppRootState } from 'store/types';

export const selectGoToLogin = (state: AppRootState): boolean => {
    return state.auth.goToLogin;
};
