import { CardsStateType } from './types';

import { CardsActionsType } from 'store/actions';
import { SET_CARDS } from 'store/actions/constants';

const initialState: CardsStateType = {
    cards: [],
    isCardsFetched: false,
    cardsTotalCount: 0,
    packUserId: '',
    searchParams: {
        cardAnswer: '',
        cardQuestion: '',
        cardsPack_id: '',
        min: 1,
        max: 2,
        sortCards: '0updated',
        page: 1,
        pageCount: 4,
    },
};

export const cardsReducer = (
    state = initialState,
    action: CardsActionsType,
): CardsStateType => {
    switch (action.type) {
        case SET_CARDS:
            return {
                ...state,
                cards: action.payload.cards,
                packUserId: action.payload.packUserId,
                isCardsFetched: true,
                cardsTotalCount: action.payload.cardsTotalCount,
            };
        default:
            return state;
    }
};
