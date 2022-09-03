import React from 'react';

import UploadIcon from '@mui/icons-material/Upload';
import { Button } from '@mui/material';

import { UploadButtonType } from './types';
import classes from './UploadButton.module.css';

import { InputTypeFile } from 'components/index';
import { ReturnComponentType } from 'types';

export const UploadButton = ({
    handleUpload,
    id,
    buttonName,
}: UploadButtonType): ReturnComponentType => {
    return (
        <div className={classes.button}>
            <InputTypeFile uploadHandler={handleUpload} id={id}>
                <Button
                    component="span"
                    variant="contained"
                    fullWidth
                    endIcon={<UploadIcon />}
                >
                    {buttonName}
                </Button>
            </InputTypeFile>
        </div>
    );
};
