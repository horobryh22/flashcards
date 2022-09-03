import React from 'react';

import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

import classes from './ModalInput.module.css';
import { CustomInputType } from './types';

import { ReturnComponentType } from 'types';

export const ModalInput = ({
    control,
    name,
    helperText,
    style,
}: CustomInputType): ReturnComponentType => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <>
                    <span className={`${classes.helperText} ${classes.bottomHelperText}`}>
                        {helperText}
                    </span>
                    <TextField
                        style={style}
                        {...field}
                        size="small"
                        variant="standard"
                        fullWidth
                    />
                </>
            )}
        />
    );
};
