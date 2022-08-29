import { SET_PACK_COVER } from 'store/actions/constants';

export type SetPackCover = {
    type: typeof SET_PACK_COVER;
    payload: { packCover: string };
};
