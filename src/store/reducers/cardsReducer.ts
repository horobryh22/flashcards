import { GetCardsType } from 'api/types';
import { CardsActionType } from 'store/actions/types';

const initialState: GetCardsType = {
    cards: [],
    searchParams: {
        cardAnswer: '',
        cardQuestion: '',
        cardsPack_id: '',
        min: 0,
        max: 4,
        sortCards: '0update',
        page: 1,
        pageCount: 100,
    },
    cardsTotalCount: 0,
    maxGrade: 0,
    minGrade: 0,
    page: 0,
    pageCount: 0,
    packUserId: '',
};

export const cardsReducer = (
    state = initialState,
    action: CardsActionType,
): GetCardsType => {
    switch (action.type) {
        case 'cards/SET_CARDS':
            return { ...state, ...action.payload.data };
        case '/cards/SET_CARDS_SEARCH_PARAMS':
            return {
                ...state,
                searchParams: { ...state.searchParams, ...action.payload.searchParams },
            };
        default:
            return state;
    }
};
