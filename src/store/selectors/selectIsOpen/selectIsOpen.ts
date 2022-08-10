import { AppRootState } from 'store/types';

export const selectIsOpen = (state: AppRootState): boolean => {
    return state.app.modal.isOpen;
};
