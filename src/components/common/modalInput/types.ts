import { CSSProperties } from 'react';

import { TextFieldProps } from '@mui/material/TextField/TextField';
import { Control } from 'react-hook-form';

export type CustomInputType = TextFieldProps & {
    control: Control<{
        name: string;
        private: boolean;
        question: string;
        answer: string;
    }>;
    name: 'name' | 'private' | 'question' | 'answer';
    helperText: string;
    style?: CSSProperties;
};
