import { AppRootState } from 'store/types';

export const selectModalCardQuestion = (state: AppRootState): string | undefined => {
    return state.app.modal.cardQuestion;
};
