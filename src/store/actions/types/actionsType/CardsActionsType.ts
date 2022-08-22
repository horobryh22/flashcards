import { setCardsAC, setCardsSearchParamsAC, setCardsPackIdAC } from 'store/actions';

export type CardsActionsType =
    | ReturnType<typeof setCardsAC>
    | ReturnType<typeof setCardsPackIdAC>
    | ReturnType<typeof setCardsSearchParamsAC>;
