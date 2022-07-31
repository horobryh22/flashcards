import { AppRootState } from 'store/types';

export const selectIsEmailSent = (state: AppRootState): boolean => {
    return state.auth.isEmailSent;
};
