import React, { ChangeEvent } from 'react';

import { Checkbox, FormControlLabel } from '@mui/material';
import { Controller } from 'react-hook-form';

import classes from './PackModal.module.css';
import { PackModalType } from './types';

import { Cover, ModalInput, UploadButton } from 'components';
import { MAX_FILE_SIZE } from 'constant';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setPackCoverAC } from 'store/actions';
import { selectPacksPackCover } from 'store/selectors';
import { ReturnComponentType } from 'types';
import { convertFileToBase64 } from 'utils';

export const PackModal = ({ control, getValues }: PackModalType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const packCover = useTypedSelector(selectPacksPackCover);

    const handleUpload = (e: ChangeEvent<HTMLInputElement>): void => {
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
            <Cover cover={packCover} />
            <UploadButton
                id="pack-cover"
                handleUpload={handleUpload}
                buttonName="UPLOAD COVER"
            />
            <ModalInput
                style={{ marginBottom: 20 }}
                control={control}
                name="name"
                helperText="Name pack"
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
