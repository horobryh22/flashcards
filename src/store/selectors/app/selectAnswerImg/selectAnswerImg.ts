import { AppRootState } from 'store/types';

export const selectAnswerImg = (state: AppRootState): string | undefined => {
    return state.app.modal.answerImg;
};
