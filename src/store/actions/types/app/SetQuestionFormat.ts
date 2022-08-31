import { SET_QUESTION_FORMAT } from 'store/actions/constants';

export type SetQuestionFormat = {
    type: typeof SET_QUESTION_FORMAT;
    payload: { format: 'text' | 'image' };
};
