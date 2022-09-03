import { AppRootState } from 'store/types';

export const selectModalCardAnswer = (state: AppRootState): string | undefined => {
    return state.app.modal.cardAnswer;
};
