import { instance } from 'api/config';
import { AuthUserDataType, RegisterUserDataType, RegisterUserErrorType } from 'api/types';
import { SignInValuesType } from 'pages';

export const authAPI = {
    me: () => {
        return instance.post<AuthUserDataType>('/auth/me');
    },
    login: (data: SignInValuesType) => {
        return instance.post<AuthUserDataType>(`/auth/login`, data);
    },
    logout: () => {
        return instance.delete<{ info: string; error: string }>('/auth/me');
    },
    register: (data: RegisterUserDataType) => {
        return instance.post<{ addedUser: AuthUserDataType } | RegisterUserErrorType>(
            'auth/register',
            data,
        );
    },
    forgot: (email: string) => {
        return instance.post<{ info: string; error: string }>(
            '/auth/forgot',
            {
                email,
                from: 'test-front-admin <hvi17@yandex.ru>',
                message: `<div style='background-color: lime; padding: 15px'>
                          password recovery link: <a href=${process.env.REACT_APP_BACK_URL}/password_recovery/$token$>link</a>
                      </div>`,
            },
            { withCredentials: true },
        );
    },
    setNewPassword: (password: string, resetPasswordToken: string) => {
        return instance.post<{ info: string; error: string }>(`/auth/set-new-password`, {
            password,
            resetPasswordToken,
        });
    },
};
