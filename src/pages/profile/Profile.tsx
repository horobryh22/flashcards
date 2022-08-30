import React, { ChangeEvent } from 'react';

import { Navigate } from 'react-router-dom';

import classes from './Profile.module.css';

import camera from 'assets/images/camera.svg';
import logoutImage from 'assets/images/logout.svg';
import { ArrowBackTo, EditableSpan, InputTypeFile, UserAvatar } from 'components';
import { MAX_FILE_SIZE } from 'constant';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setAuthErrorAC, setIsAvatarBrokenAC } from 'store/actions';
import { logout, updateUserData } from 'store/middlewares';
import { selectIsUserAuth, selectUserEmail } from 'store/selectors';
import { ReturnComponentType } from 'types';
import { convertFileToBase64 } from 'utils';

export const Profile = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const userEmail = useTypedSelector(selectUserEmail);
    const isUserAuth = useTypedSelector(selectIsUserAuth);

    const handleClick = (): void => {
        dispatch(logout());
    };

    const handleUpload = (e: ChangeEvent<HTMLInputElement>): void => {
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

    if (!isUserAuth) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            <ArrowBackTo />
            <div className={classes.wrapper}>
                <span className={classes.title}>Personal Information</span>
                <div className={classes.avatar}>
                    <UserAvatar height={100} width={100} />
                    <InputTypeFile uploadHandler={handleUpload}>
                        <div className={classes.avatarIcon}>
                            <img src={camera} alt="camera" />
                        </div>
                    </InputTypeFile>
                </div>
                <EditableSpan />
                <span className={classes.email}>{userEmail}</span>
                <button type="button" className={classes.button} onClick={handleClick}>
                    <img src={logoutImage} alt="logout" />
                    <span className={classes.buttonName}>Log out</span>
                </button>
            </div>
        </>
    );
};
