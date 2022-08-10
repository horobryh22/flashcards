import {
    setCurrentPageAC,
    setPackNameAC,
    setPacksTotalCountAC,
    setPageCountAC,
    setCardPacksAC,
    setSortPacksAC,
    setIsMyPackAC,
} from 'store/actions';
import { setSelectedCardPackAC } from 'store/actions/packs';
import { sliderAC } from 'store/actions/slider';

export type PacksActionsType =
    | ReturnType<typeof setCardPacksAC>
    | ReturnType<typeof setSortPacksAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setPacksTotalCountAC>
    | ReturnType<typeof setPageCountAC>
    | ReturnType<typeof setPackNameAC>
    | ReturnType<typeof setIsMyPackAC>
    | ReturnType<typeof sliderAC>
    | ReturnType<typeof setSelectedCardPackAC>;
