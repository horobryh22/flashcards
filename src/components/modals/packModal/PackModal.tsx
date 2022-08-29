import React, { ChangeEvent } from 'react';

import UploadIcon from '@mui/icons-material/Upload';
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

import classes from './PackModal.module.css';
import { PackModalType } from './types';

import { useAppDispatch, useTypedSelector } from 'hooks';
import { setPackCoverAC } from 'store/actions';
import { ReturnComponentType } from 'types';
import { convertFileToBase64 } from 'utils';

const MAX_FILE_SIZE = 4000000;

export const PackModal = ({ control, getValues }: PackModalType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const packCover = useTypedSelector(state => state.packs.packCover);

    const uploadHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0];

            if (file.size < MAX_FILE_SIZE) {
                convertFileToBase64(file, (file64: string) => {
                    dispatch(setPackCoverAC(file64));
                });
            }
        }
    };

    return (
        <div className={classes.modalBody}>
            {packCover && (
                <div className={classes.coverContainer}>
                    <img className={classes.cover} src={packCover} alt="cover" />
                </div>
            )}
            <div className={classes.button}>
                <label htmlFor="input-type-file">
                    <input
                        id="input-type-file"
                        type="file"
                        onChange={uploadHandler}
                        style={{ display: 'none' }}
                    />
                    <Button component="span" variant="contained" endIcon={<UploadIcon />}>
                        UPLOAD COVER
                    </Button>
                </label>
            </div>
            <Controller
                name="name"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Name pack"
                        style={{ marginBottom: 20 }}
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
