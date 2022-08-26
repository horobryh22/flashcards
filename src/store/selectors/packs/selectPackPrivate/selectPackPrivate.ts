import { AppRootState } from 'store/types';

export const selectPackPrivate = (state: AppRootState): boolean | undefined => {
    return state.app.modal.packPrivate;
};
