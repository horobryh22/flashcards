import { AppRootState } from 'store/types';

export const selectPackTitle = (state: AppRootState): string | undefined => {
    return state.app.modal.packTitle;
};
