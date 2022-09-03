import { TextFieldProps } from '@mui/material/TextField/TextField';
import { Control, RegisterOptions } from 'react-hook-form';

export type FormInputType = TextFieldProps & {
    name: 'email' | 'password' | 'passwordConfirm';
    control: Control<{
        email: string;
        password: string;
        rememberMe: boolean;
        passwordConfirm: string;
    }>;
    rules?: Pick<RegisterOptions, 'pattern' | 'required' | 'minLength'>;
};
