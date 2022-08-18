import React from 'react';

import { Avatar } from '@mui/material';
import { Navigate } from 'react-router-dom';

import classes from './Profile.module.css';

import defaultAvatar from 'assets/images/defaultAvatar.jpg';
import logoutImage from 'assets/images/logout.svg';
import { ArrowBackTo, EditableSpan, InputTypeFile } from 'components';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { logout } from 'store/middlewares';
import { selectAvatar, selectIsUserAuth, selectUserEmail } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const Profile = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const userEmail = useTypedSelector(selectUserEmail);
    const avatar = useTypedSelector(selectAvatar);
    const isUserAuth = useTypedSelector(selectIsUserAuth);

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
                    <InputTypeFile />
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
