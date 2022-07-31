import { SET_IS_INITIALIZED } from 'store/actions/constants';

export type SetIsInitializedType = {
    type: typeof SET_IS_INITIALIZED;
    payload: { isInitialized: boolean };
};
