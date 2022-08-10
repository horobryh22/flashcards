import {
    setAppStatusAC,
    setIsInitializedAC,
    setModalStateAC,
    setModalTypeAC,
} from 'store/actions';

export type AppActionsType =
    | ReturnType<typeof setAppStatusAC>
    | ReturnType<typeof setIsInitializedAC>
    | ReturnType<typeof setModalTypeAC>
    | ReturnType<typeof setModalStateAC>;
