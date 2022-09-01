import { AppRootState } from 'store/types';
import { Nullable } from 'types';

export const selectAnswerCover = (state: AppRootState): Nullable<string> => {
    return state.cards.answerCover;
};
