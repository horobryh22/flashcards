import { AppStateType } from './types';

import { REQUEST_STATUS } from 'enums';
import { AppActionsType } from 'store/actions';
import {
    SET_APP_STATUS,
    SET_IS_INITIALIZED,
    SET_MODAL_STATE,
    SET_MODAL_TYPE,
} from 'store/actions/constants';

const initialState: AppStateType = {
    isInitialized: false,
    error: null,
    status: REQUEST_STATUS.IDLE,
    modal: {
        cardId: '',
        cardTitle: '',
        packPrivate: false,
        packId: '',
        packTitle: '',
        isOpen: false,
        type: '',
        modalTitle: '',
        buttonName: '',
    },
};

export const appReducer = (
    state = initialState,
    action: AppActionsType,
): AppStateType => {
    switch (action.type) {
        case SET_IS_INITIALIZED:
            return { ...state, isInitialized: action.payload.isInitialized };
        case SET_APP_STATUS:
            return { ...state, status: action.payload.status };
        case SET_MODAL_TYPE:
            return { ...state, modal: { ...state.modal, ...action.payload.modal } };
        case SET_MODAL_STATE:
            return { ...state, modal: { ...state.modal, isOpen: action.payload.isOpen } };
        default:
            return state;
    }
};
