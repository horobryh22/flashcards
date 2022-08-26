import { REQUEST_STATUS } from 'enums';
import { AppRootState } from 'store/types';

export const selectAppStatus = (state: AppRootState): REQUEST_STATUS => {
    return state.app.status;
};
