import { AppRootState } from 'store/types';

export const selectModalCardId = (state: AppRootState): string | undefined => {
    return state.app.modal.cardId;
};
