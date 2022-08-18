import { SET_AUTH_INFO } from 'store/actions/constants';
import { Nullable } from 'types';

export type SetAuthInfoType = {
    type: typeof SET_AUTH_INFO;
    payload: { info: Nullable<string> };
};
