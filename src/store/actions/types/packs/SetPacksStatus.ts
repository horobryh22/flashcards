import { PACKS_STATUS } from 'enums';
import { SET_PACKS_STATUS } from 'store/actions/constants';

export type SetPacksStatus = {
    type: typeof SET_PACKS_STATUS;
    payload: { status: PACKS_STATUS };
};
