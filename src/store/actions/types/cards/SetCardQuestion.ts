import { SET_CARD_QUESTION } from 'store/actions/constants';

export type SetCardQuestion = {
    type: typeof SET_CARD_QUESTION;
    payload: { cardQuestion: string };
};
