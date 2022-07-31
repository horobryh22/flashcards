import { AppRootState } from 'store/types';

export const selectIsInitialized = (state: AppRootState): boolean => {
    return state.app.isInitialized;
};
