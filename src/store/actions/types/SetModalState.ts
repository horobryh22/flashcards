import { SET_MODAL_STATE } from 'store/actions/constants';

export type SetModalState = {
    type: typeof SET_MODAL_STATE;
    payload: { isOpen: boolean };
};
