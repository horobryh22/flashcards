import { AppRootState } from 'store/types';

export const selectAnswerCover = (state: AppRootState): string => {
    return state.cards.answerCover;
};
