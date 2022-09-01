import { AppRootState } from 'store/types';

export const selectQuestionFormat = (
    state: AppRootState,
): 'text' | 'image' | undefined => {
    return state.app.modal.questionFormat;
};
