import {
    setCurrentPageAC,
    setPackNameAC,
    setPacksTotalCountAC,
    setPageCountAC,
    setCardPacksAC,
    setSortPacksAC,
    setCardsRangeAC,
    setSearchUserIdAC,
} from 'store/actions';

export type PacksActionsType =
    | ReturnType<typeof setCardPacksAC>
    | ReturnType<typeof setSortPacksAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setPacksTotalCountAC>
    | ReturnType<typeof setPageCountAC>
    | ReturnType<typeof setPackNameAC>
    | ReturnType<typeof setCardsRangeAC>
    | ReturnType<typeof setSearchUserIdAC>;
