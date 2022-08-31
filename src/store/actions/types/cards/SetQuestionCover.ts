import { SET_QUESTION_COVER } from 'store/actions/constants';

export type SetQuestionCover = {
    type: typeof SET_QUESTION_COVER;
    payload: { cover: string };
};
