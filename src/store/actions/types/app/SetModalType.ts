import { SET_MODAL_TYPE } from 'store/actions/constants';
import { ModalObjectType } from 'types';

export type SetModalType = {
    type: typeof SET_MODAL_TYPE;
    payload: { modal: ModalObjectType };
};
