import { AppRootState } from 'store/types';
import { Nullable } from 'types';

export const selectAppInfo = (state: AppRootState): Nullable<string> => {
    return state.app.info;
};
