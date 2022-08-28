import { SET_APP_INFO } from 'store/actions/constants';
import { Nullable } from 'types';

export type SetAppInfo = {
    type: typeof SET_APP_INFO;
    payload: { info: Nullable<string> };
};
