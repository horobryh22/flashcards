import {
    setCurrentPageAC,
    setPackNameAC,
    setPacksTotalCountAC,
    setPageCountAC,
    setCardPacksAC,
    setSortPacksAC,
} from 'store/actions';
import { sliderAC } from 'store/actions/slider';

export type PacksActionsType =
    | ReturnType<typeof setCardPacksAC>
    | ReturnType<typeof setSortPacksAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setPacksTotalCountAC>
    | ReturnType<typeof setPageCountAC>
    | ReturnType<typeof setPackNameAC>
    | ReturnType<typeof sliderAC>;
