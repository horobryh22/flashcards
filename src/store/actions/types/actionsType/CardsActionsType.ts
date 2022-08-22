import {
    setCardsAC,
    setCardsSearchParamsAC,
    setCardsPackIdAC,
    setCardQuestionAC,
} from 'store/actions';

export type CardsActionsType =
    | ReturnType<typeof setCardsAC>
    | ReturnType<typeof setCardsPackIdAC>
    | ReturnType<typeof setCardsSearchParamsAC>
    | ReturnType<typeof setCardQuestionAC>;
