export type AuthUserDataType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number;
    isAdmin: boolean;
    verified: boolean;
    rememberMe: boolean;
    error?: string;
};
