import { SET_IS_EMAIL_SENT } from 'store/actions/constants';

export type SetIsEmailSent = {
    type: typeof SET_IS_EMAIL_SENT;
    payload: { isEmailSent: boolean };
};
