import { CardsStateType } from './types';

import { CardsActionsType } from 'store/actions';

const initialState: CardsStateType = {
    cards: [],
};

export const cardsReducer = (
    state = initialState,
    action: CardsActionsType,
): CardsStateType => {
    switch (action.type) {
        default:
            return state;
    }
};
