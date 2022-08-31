import {
    clearPackUserIdAC,
    setCardCurrentPageAC,
    setCardPageCountAC,
    setCardQuestionAC,
    setCardsAC,
    setCardsPackIdAC,
    setCardsSearchParamsAC,
    updatePackDataAC,
    setIsPackDeletedAC,
    setSortCardsAC,
    setCardsPackNameAC,
    setUpdatedCardGradeAC,
    setQuestionCoverAC,
    setAnswerCoverAC,
} from 'store/actions';

export type CardsActionsType =
    | ReturnType<typeof setCardsAC>
    | ReturnType<typeof setCardsPackIdAC>
    | ReturnType<typeof setCardsSearchParamsAC>
    | ReturnType<typeof setCardQuestionAC>
    | ReturnType<typeof setCardCurrentPageAC>
    | ReturnType<typeof setCardPageCountAC>
    | ReturnType<typeof clearPackUserIdAC>
    | ReturnType<typeof updatePackDataAC>
    | ReturnType<typeof setIsPackDeletedAC>
    | ReturnType<typeof setSortCardsAC>
    | ReturnType<typeof setCardsPackNameAC>
    | ReturnType<typeof setUpdatedCardGradeAC>
    | ReturnType<typeof setQuestionCoverAC>
    | ReturnType<typeof setAnswerCoverAC>;
