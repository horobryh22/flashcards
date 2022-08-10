import { AppRootState } from 'store/types';

export const selectButtonName = (state: AppRootState): string => {
    return state.app.modal.buttonName;
};
