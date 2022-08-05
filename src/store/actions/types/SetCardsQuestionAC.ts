import { SET_CARD_QUESTION } from 'store/actions/constants';

export type SetCardsQuestionAC = {
    type: typeof SET_CARD_QUESTION;
    payload: { question: string };
};
