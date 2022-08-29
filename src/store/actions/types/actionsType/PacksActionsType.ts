import {
    setCardPacksAC,
    setCardsRangeAC,
    setCurrentPageAC,
    setIsPacksFetched,
    setPackCoverAC,
    setPackNameAC,
    setPageCountAC,
    setSearchParamsAC,
    setSearchUserIdAC,
    setSortPacksAC,
} from 'store/actions';

export type PacksActionsType =
    | ReturnType<typeof setCardPacksAC>
    | ReturnType<typeof setSortPacksAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setPageCountAC>
    | ReturnType<typeof setPackNameAC>
    | ReturnType<typeof setCardsRangeAC>
    | ReturnType<typeof setSearchUserIdAC>
    | ReturnType<typeof setSearchParamsAC>
    | ReturnType<typeof setIsPacksFetched>
    | ReturnType<typeof setPackCoverAC>;
