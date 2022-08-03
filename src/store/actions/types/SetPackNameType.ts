import { SET_PACK_NAME } from 'store/actions/constants';

export type SetPackNameType = {
    type: typeof SET_PACK_NAME;
    payload: { packName: string };
};
