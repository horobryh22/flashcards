import { REQUEST_STATUS } from 'enums';
import { SET_APP_STATUS } from 'store/actions/constants';

export type SetAppStatusType = {
    type: typeof SET_APP_STATUS;
    payload: { status: REQUEST_STATUS };
};
