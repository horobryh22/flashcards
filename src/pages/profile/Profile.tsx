import React from 'react';

import { Avatar } from '@mui/material';
import { Navigate } from 'react-router-dom';

import classes from './Profile.module.css';

import camera from 'assets/images/camera.svg';
import defaultAvatar from 'assets/images/defaultAvatar.jpg';
import logoutImage from 'assets/images/logout.svg';
import { ArrowBackTo, EditableSpan } from 'components';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { logout } from 'store/middlewares';
import { ReturnComponentType } from 'types';

export const Profile = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const userEmail = useTypedSelector(state => state.auth.authUserData.email);
    const avatar = useTypedSelector(state => state.auth.authUserData.avatar);
    const isUserAuth = useTypedSelector(state => state.auth.isUserAuth);

    const handleClick = (): void => {
        dispatch(logout());
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
                    <Avatar
                        alt="avatar"
                        src={avatar || defaultAvatar}
                        sx={{ width: 100, height: 100 }}
                    />
                    <div className={classes.avatarIcon}>
                        <img src={camera} alt="camera" />
                    </div>
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
