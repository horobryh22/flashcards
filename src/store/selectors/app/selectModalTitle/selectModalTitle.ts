import { AppRootState } from 'store/types';

export const selectModalTitle = (state: AppRootState): string => {
    return state.app.modal.modalTitle;
};
