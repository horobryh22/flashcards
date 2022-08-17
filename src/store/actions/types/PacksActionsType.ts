import {
    setCurrentPageAC,
    setPackNameAC,
    setPacksTotalCountAC,
    setPageCountAC,
    setCardPacksAC,
    setSortPacksAC,
    setCardsRangeAC,
    setSearchUserIdAC,
    setSearchParamsAC,
    setIsMyPackAC,
    setPacksStatusAC,
} from 'store/actions';
import { setSelectedCardPackAC } from 'store/actions/packs';

export type PacksActionsType =
    | ReturnType<typeof setCardPacksAC>
    | ReturnType<typeof setSortPacksAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setPacksTotalCountAC>
    | ReturnType<typeof setPageCountAC>
    | ReturnType<typeof setPackNameAC>
    | ReturnType<typeof setCardsRangeAC>
    | ReturnType<typeof setSearchUserIdAC>
    | ReturnType<typeof setSearchParamsAC>
    | ReturnType<typeof setIsMyPackAC>
    | ReturnType<typeof setSelectedCardPackAC>
    | ReturnType<typeof setPacksStatusAC>;
