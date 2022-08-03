import React from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LogoutIcon from '@mui/icons-material/Logout';
import PhotoCameraRoundedIcon from '@mui/icons-material/PhotoCameraRounded';
import { Navigate } from 'react-router-dom';

import classes from './Profile.module.css';

import { EditableSpan } from 'components/profile/EditableSpan';
import { UserPhoto } from 'components/userPhoto/UserPhoto';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { logout } from 'store/middlewares/auth/logout';
import { updateUserData } from 'store/middlewares/auth/updateUserData';
import { ReturnComponentType } from 'types';

export const Profile = (): ReturnComponentType => {
    const isUserAuth = useTypedSelector(state => state.auth.isUserAuth);
    const dispatch = useAppDispatch();

    const { authUserData } = useTypedSelector(state => state.auth);

    const editTitle = (name: string): void => {
        dispatch(updateUserData({ name, avatar: '' }));
    };

    const logOutHandle = (): void => {
        dispatch(logout());
    };

    if (!isUserAuth) {
        return <Navigate to="/login" />;
    }

    return (
        <div className={classes.container}>
            <div className={classes.BackToPack}>
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                <div
                    style={{ display: 'flex', justifyContent: 'center' }}
                    onClick={() => {}}
                >
                    <ArrowBackIcon />
                    Back to packs List
                </div>
            </div>
            <div className={classes.rectangle}>
                <div className={classes.personalInfo}>Personal Information</div>
                <div className={classes.avatarBox}>
                    <UserPhoto variant="standard" />
                    <PhotoCameraRoundedIcon
                        onClick={() => {}}
                        className={classes.avatarCamera}
                    />
                </div>
                <div className={classes.nickName}>
                    <EditableSpan title={authUserData.name} editTitle={editTitle} />
                </div>
                <div className={classes.eMail}>{authUserData.email}</div>
                <div className={classes.logOutBtn}>
                    <button
                        type="button"
                        onClick={logOutHandle}
                        style={{
                            border: 'none',
                            background: 'transparent',
                            width: '127px',
                        }}
                    >
                        <LogoutIcon />
                        Log out
                    </button>
                </div>
            </div>
        </div>
    );
};
