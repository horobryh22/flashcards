import { GetCardsType } from 'api/types';
import {
    SET_CARD_QUESTION,
    SET_CARDS,
    SET_CARDS_PACK_ID,
    SET_CARDS_PAGE,
    SET_CARDS_PAGE_COUNT,
    SET_CARDS_SEARCH_PARAMS,
    SET_UPDATED_GRADE,
} from 'store/actions/constants';
import { CardsActionType } from 'store/actions/types';

const initialState: GetCardsType = {
    cards: [],
    searchParams: {
        cardAnswer: '',
        cardQuestion: '',
        cardsPack_id: '',
        min: 0,
        max: 4,
        sortCards: '0updated',
        page: 1,
        pageCount: 5,
    },
    cardsTotalCount: 0,
    maxGrade: 5,
    minGrade: 0,
    page: 1,
    pageCount: 5,
    packUserId: '',
    cardsPack_id: '',
};

export const cardsReducer = (
    state = initialState,
    action: CardsActionType,
): GetCardsType => {
    switch (action.type) {
        case SET_CARDS:
            return { ...state, ...action.payload.data };
        case SET_CARDS_SEARCH_PARAMS:
            return {
                ...state,
                searchParams: { ...state.searchParams, ...action.payload.searchParams },
            };
        case SET_CARDS_PACK_ID:
            return {
                ...state,
                cardsPack_id: action.payload.cardsPack_id,
            };
        case SET_CARD_QUESTION:
            return {
                ...state,
                searchParams: {
                    ...state.searchParams,
                    cardQuestion: action.payload.question,
                },
            };
        case SET_CARDS_PAGE_COUNT:
            return {
                ...state,
                pageCount: action.payload.pageCount,
                searchParams: {
                    ...state.searchParams,
                    pageCount: action.payload.pageCount,
                },
            };
        case SET_CARDS_PAGE:
            return {
                ...state,
                page: action.payload.page,
                searchParams: { ...state.searchParams, page: action.payload.page },
            };
        case SET_UPDATED_GRADE:
            return {
                ...state,
                cards: state.cards.map(card =>
                    card._id === action.payload.updatedCard.updatedGrade.card_id
                        ? { ...card, ...action.payload.updatedCard.updatedGrade }
                        : card,
                ),
            };
        default:
            return state;
    }
};
