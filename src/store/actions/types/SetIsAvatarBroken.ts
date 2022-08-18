import { SET_IS_AVATAR_BROKEN } from 'store/actions/constants';

export type SetIsAvatarBroken = {
    type: typeof SET_IS_AVATAR_BROKEN;
    payload: { isBroken: boolean };
};
