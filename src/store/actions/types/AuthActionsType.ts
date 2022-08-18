import {
    setAuthErrorAC,
    setIsEmailSentAC,
    setAuthInfoAC,
    setIsUserAuthAC,
    setGoToLoginAC,
    setAuthUserDataAC,
    setIsAvatarBrokenAC,
} from 'store/actions';

export type AuthActionsType =
    | ReturnType<typeof setAuthErrorAC>
    | ReturnType<typeof setIsUserAuthAC>
    | ReturnType<typeof setAuthInfoAC>
    | ReturnType<typeof setIsEmailSentAC>
    | ReturnType<typeof setGoToLoginAC>
    | ReturnType<typeof setAuthUserDataAC>
    | ReturnType<typeof setIsAvatarBrokenAC>;
