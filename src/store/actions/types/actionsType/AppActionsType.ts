import {
    setAppInfoAC,
    setAppStatusAC,
    setIsInitializedAC,
    setModalStateAC,
    setModalTypeAC,
} from 'store/actions';

export type AppActionsType =
    | ReturnType<typeof setAppStatusAC>
    | ReturnType<typeof setIsInitializedAC>
    | ReturnType<typeof setModalTypeAC>
    | ReturnType<typeof setModalStateAC>
    | ReturnType<typeof setAppInfoAC>;
