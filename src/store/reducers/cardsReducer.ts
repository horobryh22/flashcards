import { CardsStateType } from './types';

import { CardsActionsType } from 'store/actions';
import {
    CLEAR_PACK_USER_ID,
    SET_CARD_CURRENT_PAGE,
    SET_CARD_PAGE_COUNT,
    SET_CARD_QUESTION,
    SET_CARDS,
    SET_CARDS_PACK_ID,
    SET_CARDS_PACK_NAME,
    SET_CARDS_SEARCH_PARAMS,
    SET_IS_PACK_DELETED,
    SET_SORT_CARDS,
    UPDATE_PACK_DATA,
} from 'store/actions/constants';

const initialState: CardsStateType = {
    cards: [],
    isCardsFetched: false,
    cardsTotalCount: 0,
    isPackDeleted: false,
    packUserId: '',
    packName: '',
    packPrivate: false,
    packDeckCover: '',
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
                cards: action.payload.data.cards,
                packUserId: action.payload.data.packUserId,
                isCardsFetched: true,
                cardsTotalCount: action.payload.data.cardsTotalCount,
                packName: action.payload.data.packName,
                packPrivate: action.payload.data.packPrivate,
                packDeckCover: action.payload.data.packDeckCover,
                isPackDeleted: false,
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
        case UPDATE_PACK_DATA:
            return {
                ...state,
                packDeckCover: action.payload.deckCover,
                packPrivate: action.payload.packPrivate,
                packName: action.payload.name,
            };
        case SET_IS_PACK_DELETED:
            return {
                ...state,
                isPackDeleted: action.payload.isPackDeleted,
            };
        case SET_SORT_CARDS:
            return {
                ...state,
                searchParams: { ...state.searchParams, sortCards: action.payload.sort },
            };
        case SET_CARDS_PACK_NAME:
            return { ...state, packName: action.payload.packName };
        default:
            return state;
    }
};
