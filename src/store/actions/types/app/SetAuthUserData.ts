import { AuthUserDataType } from 'api/types';
import { SET_AUTH_USER_DATA } from 'store/actions/constants';

export type SetAuthUserDataType = {
    type: typeof SET_AUTH_USER_DATA;
    payload: {
        data: AuthUserDataType;
    };
};
