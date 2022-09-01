import { AppRootState } from 'store/types';
import { Nullable } from 'types';

export const selectQuestionCover = (state: AppRootState): Nullable<string> => {
    return state.cards.questionCover;
};
