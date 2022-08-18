import { SET_AUTH_ERROR } from 'store/actions/constants';
import { Nullable } from 'types';

export type SetAuthErrorType = {
    type: typeof SET_AUTH_ERROR;
    payload: { error: Nullable<string> };
};
