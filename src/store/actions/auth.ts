import {
    SET_AUTH_ERROR,
    SET_AUTH_INFO,
    SET_AUTH_USER_DATA,
    SET_GO_TO_LOGIN,
    SET_IS_AVATAR_BROKEN,
    SET_IS_EMAIL_SENT,
    SET_IS_USER_AUTH,
} from './constants';
import {
    SetAuthErrorType,
    SetAuthInfoType,
    SetAuthUserDataType,
    SetGoToLogin,
    SetIsAvatarBroken,
    SetIsEmailSent,
    SetIsUserAuth,
} from './types';

import { AuthUserDataType } from 'api/types';
import { Nullable } from 'types';

export const setAuthErrorAC = (error: Nullable<string>): SetAuthErrorType => {
    return {
        type: SET_AUTH_ERROR,
        payload: { error },
    } as const;
};

export const setIsUserAuthAC = (isUserAuth: boolean): SetIsUserAuth => {
    return {
        type: SET_IS_USER_AUTH,
        payload: { isUserAuth },
    } as const;
};

export const setAuthInfoAC = (info: Nullable<string>): SetAuthInfoType => {
    return {
        type: SET_AUTH_INFO,
        payload: { info },
    } as const;
};

export const setIsEmailSentAC = (isEmailSent: boolean): SetIsEmailSent => {
    return {
        type: SET_IS_EMAIL_SENT,
        payload: { isEmailSent },
    } as const;
};

export const setGoToLoginAC = (goToLogin: boolean): SetGoToLogin => {
    return {
        type: SET_GO_TO_LOGIN,
        payload: { goToLogin },
    } as const;
};

export const setAuthUserDataAC = (data: AuthUserDataType): SetAuthUserDataType => {
    return {
        type: SET_AUTH_USER_DATA,
        payload: {
            data,
        },
    };
};

export const setIsAvatarBrokenAC = (isBroken: boolean): SetIsAvatarBroken => {
    return {
        type: SET_IS_AVATAR_BROKEN,
        payload: {
            isBroken,
        },
    };
};
