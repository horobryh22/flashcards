import React, { useRef } from 'react';

import { NavLink } from 'react-router-dom';

import classes from './ProfileList.module.css';
import { ProfileListType } from './types';

import logoutImage from 'assets/images/logout.svg';
import profile from 'assets/images/profile.svg';
import { useAppDispatch, useOutsideClick } from 'hooks';
import { logout } from 'store/middlewares';
import { ReturnComponentType } from 'types';

export const ProfileList = ({
    opened,
    onClose,
}: ProfileListType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const listRef = useRef<HTMLDivElement | null>(null);

    const handleClickByLogout = (): void => dispatch(logout());

    useOutsideClick(listRef, onClose, opened);

    return (
        <div ref={listRef} className={classes.wrapper}>
            <div className={classes.tongue} />
            <div className={classes.itemWrapper}>
                <NavLink to="/profile">
                    <img src={profile} alt="profile" />
                    <span>Profile</span>
                </NavLink>
            </div>
            <div className={classes.itemWrapper}>
                <NavLink to="" onClick={handleClickByLogout}>
                    <img src={logoutImage} alt="logout" />
                    <span>Log out</span>
                </NavLink>
            </div>
        </div>
    );
};
