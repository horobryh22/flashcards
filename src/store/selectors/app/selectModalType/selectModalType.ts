import { AppRootState } from 'store/types';
import { ModalTypes } from 'types';

export const selectModalType = (state: AppRootState): ModalTypes => {
    return state.app.modal.type;
};
