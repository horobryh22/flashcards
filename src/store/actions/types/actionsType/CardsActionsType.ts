import {
    setCardsAC,
    setCardsSearchParamsAC,
    setCardsPackIdAC,
    setCardQuestionAC,
    setCardCurrentPageAC,
    setCardPageCountAC,
} from 'store/actions';

export type CardsActionsType =
    | ReturnType<typeof setCardsAC>
    | ReturnType<typeof setCardsPackIdAC>
    | ReturnType<typeof setCardsSearchParamsAC>
    | ReturnType<typeof setCardQuestionAC>
    | ReturnType<typeof setCardCurrentPageAC>
    | ReturnType<typeof setCardPageCountAC>;
