import { AppRootState } from 'store/types';

export const selectId = (state: AppRootState): string => {
    return state.packs.searchParams.user_id;
};
