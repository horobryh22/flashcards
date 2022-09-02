import React from 'react';

import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

import classes from './CustomInput.module.css';
import { CustomInputType } from './types';

import { ReturnComponentType } from 'types';

export const CustomInput = ({
    control,
    name,
    label,
}: CustomInputType): ReturnComponentType => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <>
                    <span className={`${classes.helperText} ${classes.bottomHelperText}`}>
                        {label}
                    </span>
                    <TextField {...field} size="small" variant="standard" fullWidth />
                </>
            )}
        />
    );
};
