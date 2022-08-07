import React from 'react';

import { Checkbox, FormControlLabel, TextField } from '@mui/material';

import classes from './AddPackModal.module.css';

import { ModalParent } from 'components';
import { ReturnComponentType } from 'types';

export const AddPackModal = (): ReturnComponentType => {
    return (
        <ModalParent title="Add new pack" buttonName="Save">
            <div className={classes.modalBody}>
                <TextField
                    label="Name pack"
                    id="standard-size-small"
                    placeholder="Enter pack name"
                    size="small"
                    variant="standard"
                    fullWidth
                />
                <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Private pack"
                />
            </div>
        </ModalParent>
    );
};
