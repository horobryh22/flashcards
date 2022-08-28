import {
    SET_APP_INFO,
    SET_APP_STATUS,
    SET_IS_INITIALIZED,
    SET_MODAL_STATE,
    SET_MODAL_TYPE,
} from './constants';
import {
    SetAppInfo,
    SetAppStatusType,
    SetIsInitializedType,
    SetModalState,
    SetModalType,
} from './types';

import { REQUEST_STATUS } from 'enums';
import { ModalObjectType, Nullable } from 'types';

export const setAppStatusAC = (status: REQUEST_STATUS): SetAppStatusType => {
    return {
        type: SET_APP_STATUS,
        payload: { status },
    } as const;
};

export const setIsInitializedAC = (isInitialized: boolean): SetIsInitializedType => {
    return {
        type: SET_IS_INITIALIZED,
        payload: { isInitialized },
    } as const;
};

export const setModalTypeAC = (modal: ModalObjectType): SetModalType => {
    return {
        type: SET_MODAL_TYPE,
        payload: { modal },
    } as const;
};

export const setModalStateAC = (isOpen: boolean): SetModalState => {
    return {
        type: SET_MODAL_STATE,
        payload: { isOpen },
    } as const;
};

export const setAppInfoAC = (info: Nullable<string>): SetAppInfo => {
    return {
        type: SET_APP_INFO,
        payload: { info },
    } as const;
};
