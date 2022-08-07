import React from 'react';

import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import { Control, Controller } from 'react-hook-form';

import classes from './AddPackModal.module.css';

import { ModalParent } from 'components';
import { ReturnComponentType } from 'types';

export type AddPackModalType = {
    open: boolean;
    onClose: () => void;
    control: Control<{ name: string; private: boolean }>;
    getValues: () => { name: string; private: boolean };
};

export const AddPackModal = ({
    open,
    onClose,
    control,
    getValues,
}: AddPackModalType): ReturnComponentType => {
    return (
        <ModalParent title="Add new pack" buttonName="Save" onClose={onClose} open={open}>
            <div className={classes.modalBody}>
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Name pack"
                            placeholder="Enter pack name"
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
        </ModalParent>
    );
};
