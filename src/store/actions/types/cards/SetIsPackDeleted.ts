import { SET_IS_PACK_DELETED } from 'store/actions/constants';

export type SetIsPackDeleted = {
    type: typeof SET_IS_PACK_DELETED;
    payload: { isPackDeleted: boolean };
};
