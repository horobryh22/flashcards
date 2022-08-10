import { CardType } from 'api/types';
import { SET_SELECTED_CARDS_PACK } from 'store/actions/constants';

export type SetSelectedCardsPackType = {
    type: typeof SET_SELECTED_CARDS_PACK;
    payload: { pack: CardType };
};
