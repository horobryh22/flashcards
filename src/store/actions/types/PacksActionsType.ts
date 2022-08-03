import { setCardPacksAC, setSortPacksAC } from 'store/actions';
import { sliderAC } from 'store/actions/slider';

export type PacksActionsType =
    | ReturnType<typeof setCardPacksAC>
    | ReturnType<typeof setSortPacksAC>
    | ReturnType<typeof sliderAC>;
