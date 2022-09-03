import { AppRootState } from 'store/types';

export const selectQuestionCover = (state: AppRootState): string => {
    return state.cards.questionCover;
};
