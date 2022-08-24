import { CardsStateType } from './types';

import { CardsActionsType } from 'store/actions';
import {
    CLEAR_PACK_USER_ID,
    SET_CARD_CURRENT_PAGE,
    SET_CARD_PAGE_COUNT,
    SET_CARD_QUESTION,
    SET_CARDS,
    SET_CARDS_PACK_ID,
    SET_CARDS_SEARCH_PARAMS,
} from 'store/actions/constants';

const initialState: CardsStateType = {
    cards: [],
    isCardsFetched: false,
    cardsTotalCount: 0,
    packUserId: '',
    packName: '',
    searchParams: {
        cardAnswer: '',
        cardQuestion: '',
        cardsPack_id: '',
        min: 0,
        max: 120,
        sortCards: '0updated',
        page: 1,
        pageCount: 6,
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
        case SET_CARDS_PACK_ID:
            return {
                ...state,
                searchParams: {
                    ...state.searchParams,
                    cardsPack_id: action.payload.cardsPackId,
                },
            };
        case SET_CARDS_SEARCH_PARAMS:
            return {
                ...state,
                searchParams: { ...state.searchParams, ...action.payload.params },
            };
        case SET_CARD_QUESTION:
            return {
                ...state,
                searchParams: {
                    ...state.searchParams,
                    cardQuestion: action.payload.cardQuestion,
                },
            };
        case SET_CARD_CURRENT_PAGE:
            return {
                ...state,
                searchParams: { ...state.searchParams, page: action.payload.page },
            };
        case SET_CARD_PAGE_COUNT:
            return {
                ...state,
                searchParams: {
                    ...state.searchParams,
                    pageCount: action.payload.pageCount,
                },
            };
        case CLEAR_PACK_USER_ID:
            return {
                ...state,
                packUserId: '',
            };
        default:
            return state;
    }
};
