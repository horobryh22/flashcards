export type RegisterUserDataType = {
    email: string;
    password: string;
};

export type RegisterUserErrorType = {
    error: string;
    in: string;
    isEmailValid: boolean;
    isPassValid: boolean;
};
