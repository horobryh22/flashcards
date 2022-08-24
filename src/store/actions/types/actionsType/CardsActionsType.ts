import {
    setCardsAC,
    setCardsSearchParamsAC,
    setCardsPackIdAC,
    setCardQuestionAC,
    setCardCurrentPageAC,
    setCardPageCountAC,
    clearPackUserIdAC,
} from 'store/actions';

export type CardsActionsType =
    | ReturnType<typeof setCardsAC>
    | ReturnType<typeof setCardsPackIdAC>
    | ReturnType<typeof setCardsSearchParamsAC>
    | ReturnType<typeof setCardQuestionAC>
    | ReturnType<typeof setCardCurrentPageAC>
    | ReturnType<typeof setCardPageCountAC>
    | ReturnType<typeof clearPackUserIdAC>;
