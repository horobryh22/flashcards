import { SET_ANSWER_COVER } from 'store/actions/constants';

export type SetAnswerCover = {
    type: typeof SET_ANSWER_COVER;
    payload: { cover: string };
};
