import { PACKS_STATUS } from 'enums';
import { AppRootState } from 'store/types';

export const selectPacksStatus = (state: AppRootState): PACKS_STATUS => {
    return state.packs.status;
};
