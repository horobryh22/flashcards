import { AuthStateType } from './types';

import { AuthActionsType } from 'store/actions';
import {
    SET_AUTH_USER_DATA,
    SET_AUTH_ERROR,
    SET_AUTH_INFO,
    SET_GO_TO_LOGIN,
    SET_IS_AVATAR_BROKEN,
    SET_IS_EMAIL_SENT,
    SET_IS_USER_AUTH,
} from 'store/actions/constants';

const initialState: AuthStateType = {
    goToLogin: false,
    isEmailSent: false,
    info: null,
    error: null,
    isUserAuth: false,
    isAvatarBroken: false,
    authUserData: {
        _id: '',
        email: '',
        name: '',
        avatar: '',
        publicCardPacksCount: 0,
        isAdmin: false,
        verified: false,
        rememberMe: false,
    },
};

export const authReducer = (
    state = initialState,
    action: AuthActionsType,
): AuthStateType => {
    switch (action.type) {
        case SET_GO_TO_LOGIN:
            return { ...state, goToLogin: action.payload.goToLogin };
        case SET_IS_EMAIL_SENT:
            return { ...state, isEmailSent: action.payload.isEmailSent };
        case SET_AUTH_INFO:
            return { ...state, info: action.payload.info };
        case SET_IS_USER_AUTH:
            return { ...state, isUserAuth: action.payload.isUserAuth };
        case SET_AUTH_ERROR:
            return { ...state, error: action.payload.error };
        case SET_AUTH_USER_DATA:
            return { ...state, authUserData: action.payload.data };
        case SET_IS_AVATAR_BROKEN:
            return { ...state, isAvatarBroken: action.payload.isBroken };
        default:
            return state;
    }
};
