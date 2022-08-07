import { SET_IS_MY_CARDS } from 'store/actions/constants';

export type SetIsPackType = {
    type: typeof SET_IS_MY_CARDS;
    payload: { isMyPack: boolean };
};
