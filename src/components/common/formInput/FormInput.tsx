import React from 'react';

import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

import { FormInputType } from './types';

import { ReturnComponentType } from 'types';

export const FormInput = ({
    control,
    name,
    rules,
    ...props
}: FormInputType): ReturnComponentType => {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) => <TextField {...field} {...props} />}
        />
    );
};
