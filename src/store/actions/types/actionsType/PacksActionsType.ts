import {
    setCardPacksAC,
    setCardsRangeAC,
    setCurrentPageAC,
    setPackNameAC,
    setPageCountAC,
    setSearchParamsAC,
    setSearchUserIdAC,
    setSortPacksAC,
} from 'store/actions/index';

export type PacksActionsType =
    | ReturnType<typeof setCardPacksAC>
    | ReturnType<typeof setSortPacksAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setPageCountAC>
    | ReturnType<typeof setPackNameAC>
    | ReturnType<typeof setCardsRangeAC>
    | ReturnType<typeof setSearchUserIdAC>
    | ReturnType<typeof setSearchParamsAC>;
