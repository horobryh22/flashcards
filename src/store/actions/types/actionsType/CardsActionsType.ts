import { setCardsAC, setCardsPackNameAC } from 'store/actions';

export type CardsActionsType =
    | ReturnType<typeof setCardsAC>
    | ReturnType<typeof setCardsPackNameAC>;
