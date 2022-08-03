import { CardType } from 'api/types';
import { SET_CARD_PACKS } from 'store/actions/constants';

export type SetCardPacksType = {
    type: typeof SET_CARD_PACKS;
    payload: { cardPacks: CardType[] };
};
