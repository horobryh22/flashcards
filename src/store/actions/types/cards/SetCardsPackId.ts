import { SET_CARDS_PACK_ID } from 'store/actions/constants';

export type SetCardsPackId = {
    type: typeof SET_CARDS_PACK_ID;
    payload: { cardsPackId: string };
};
