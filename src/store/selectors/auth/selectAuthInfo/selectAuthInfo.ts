import { AppRootState } from 'store/types';
import { Nullable } from 'types';

export const selectAuthInfo = (state: AppRootState): Nullable<string> => {
    return state.auth.info;
};
