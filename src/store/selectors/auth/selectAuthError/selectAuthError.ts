import { AppRootState } from 'store/types';
import { Nullable } from 'types';

export const selectAuthError = (state: AppRootState): Nullable<string> => {
    return state.auth.error;
};
