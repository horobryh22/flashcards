import {
    setCardsAC,
    setCardsPackIdAC,
    setCardsPageAC,
    setCardsPageCountAC,
    setCardsQuestionAC,
    setCardsSearchParamsAC,
} from 'store/actions/cards';

export type CardsActionType =
    | ReturnType<typeof setCardsAC>
    | ReturnType<typeof setCardsSearchParamsAC>
    | ReturnType<typeof setCardsPackIdAC>
    | ReturnType<typeof setCardsPageAC>
    | ReturnType<typeof setCardsPageCountAC>
    | ReturnType<typeof setCardsQuestionAC>;
