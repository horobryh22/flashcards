import { SET_CARDS_PACK_NAME } from 'store/actions/constants';

export type SetCardsPackName = {
    type: typeof SET_CARDS_PACK_NAME;
    payload: { packName: string };
};
