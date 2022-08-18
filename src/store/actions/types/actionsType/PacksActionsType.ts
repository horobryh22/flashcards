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
    setPacksStatusAC,
} from 'store/actions/index';

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
    | ReturnType<typeof setPacksStatusAC>;
