import { AuthUserDataType } from 'api/types/AuthUserDataType/AuthUserDataType';
import { Nullable } from 'types';

export type AuthStateType = {
    goToLogin: boolean;
    isEmailSent: boolean;
    info: Nullable<string>;
    error: Nullable<string>;
    isUserAuth: boolean;
    authUserData: AuthUserDataType;
};
