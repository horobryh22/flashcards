import { SET_CARDS_PACK_ID } from 'store/actions/constants';

export type SetCardsPackIdType = {
    type: typeof SET_CARDS_PACK_ID;
    payload: { cardsPack_id: string };
};
