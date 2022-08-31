import {
    setAppInfoAC,
    setAppStatusAC,
    setIsInitializedAC,
    setModalStateAC,
    setModalTypeAC,
    setQuestionFormatAC,
} from 'store/actions';

export type AppActionsType =
    | ReturnType<typeof setAppStatusAC>
    | ReturnType<typeof setIsInitializedAC>
    | ReturnType<typeof setModalTypeAC>
    | ReturnType<typeof setModalStateAC>
    | ReturnType<typeof setAppInfoAC>
    | ReturnType<typeof setQuestionFormatAC>;
