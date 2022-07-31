import { instance } from 'api/config';
import { AuthUserDataType, UpdateUserDataType } from 'api/types';

export const userAPI = {
    updateUserData: (userData: UpdateUserDataType) => {
        return instance.put<{ updatedUser: AuthUserDataType; error: string }>(
            'auth/me',
            userData,
        );
    },
};
