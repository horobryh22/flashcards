import { AppRootState } from 'store/types';

export const selectQuestionImg = (state: AppRootState): string | undefined => {
    return state.app.modal.questionImg;
};
