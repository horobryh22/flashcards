import { AppRootState } from 'store/types';

export const selectPackId = (state: AppRootState): string | undefined => {
    return state.app.modal.packId;
};
