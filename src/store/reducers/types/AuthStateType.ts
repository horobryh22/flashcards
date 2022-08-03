import { AuthUserDataType } from 'api/types/auth/AuthUserDataType/AuthUserDataType';
import { Nullable } from 'types';

export type AuthStateType = {
    goToLogin: boolean;
    isEmailSent: boolean;
    info: Nullable<string>;
    error: Nullable<string>;
    isUserAuth: boolean;
    authUserData: AuthUserDataType;
};
