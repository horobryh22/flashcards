import { GetCardsType } from 'api/types/cards/GetCardType/GetCardsType';
import { SET_CARDS } from 'store/actions/constants';

export type SetCardsType = {
    type: typeof SET_CARDS;
    payload: { data: GetCardsType };
};
