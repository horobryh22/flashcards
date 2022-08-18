import React, { ChangeEvent } from 'react';

import classes from './InputTypeFile.module.css';

import camera from 'assets/images/camera.svg';
import { useAppDispatch } from 'hooks';
import { setAuthErrorAC, setIsAvatarBrokenAC } from 'store/actions';
import { updateUserData } from 'store/middlewares';
import { ReturnComponentType } from 'types';
import { convertFileToBase64 } from 'utils';

const MAX_FILE_SIZE = 4000000;

export const InputTypeFile = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const uploadHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0];

            if (file.size < MAX_FILE_SIZE) {
                convertFileToBase64(file, (file64: string) => {
                    dispatch(setIsAvatarBrokenAC(false));
                    dispatch(updateUserData({ avatar: file64 }));
                });
            } else {
                dispatch(setAuthErrorAC('The file is too big size'));
            }
        }
    };

    return (
        <label htmlFor="input-file">
            <input
                type="file"
                onChange={uploadHandler}
                style={{ display: 'none' }}
                id="input-file"
            />
            <div className={classes.avatarIcon}>
                <img src={camera} alt="camera" />
            </div>
        </label>
    );
};
