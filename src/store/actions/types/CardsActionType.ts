import { setCardsAC, setCardsSearchParamsAC } from 'store/actions/cards';

export type CardsActionType =
    | ReturnType<typeof setCardsAC>
    | ReturnType<typeof setCardsSearchParamsAC>;
