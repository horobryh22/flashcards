import { GetCardsResponseType } from 'api/types';
import { SET_CARDS } from 'store/actions/constants';

export type SetCardsType = {
    type: typeof SET_CARDS;
    payload: { data: GetCardsResponseType };
};
