import { setAppStatusAC, setIsInitializedAC } from 'store/actions/app';

export type AppActionsType =
    | ReturnType<typeof setAppStatusAC>
    | ReturnType<typeof setIsInitializedAC>;
