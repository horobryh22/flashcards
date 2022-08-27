import React from 'react';

import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

import classes from './PackModal.module.css';
import { PackModalType } from './types';

import { ReturnComponentType } from 'types';

export const PackModal = ({ control, getValues }: PackModalType): ReturnComponentType => {
    return (
        <div className={classes.modalBody}>
            <Controller
                name="name"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Name pack"
                        size="small"
                        variant="standard"
                        fullWidth
                    />
                )}
            />
            <Controller
                name="private"
                control={control}
                render={({ field }) => (
                    <FormControlLabel
                        {...field}
                        label="Private pack"
                        checked={getValues().private}
                        control={<Checkbox />}
                    />
                )}
            />
        </div>
    );
};
