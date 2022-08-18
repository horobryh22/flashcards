import { SET_GO_TO_LOGIN } from 'store/actions/constants';

export type SetGoToLogin = {
    type: typeof SET_GO_TO_LOGIN;
    payload: { goToLogin: boolean };
};
