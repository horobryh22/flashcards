import React from 'react';

import { ListItemIcon, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import logoutImage from 'assets/images/logout.svg';
import profileImage from 'assets/images/profile.svg';
import { ParentMenu } from 'components/index';
import { useAppDispatch } from 'hooks';
import { logout } from 'store/middlewares';
import { MenuType, ReturnComponentType } from 'types';

export const AccountMenu = ({
    element,
    setElement,
    open,
}: MenuType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const handleProfileClick = (): void => {
        navigate('profile');
    };

    const handleLogoutClick = (): void => {
        dispatch(logout());
    };

    return (
        <ParentMenu element={element} open={open} setElement={setElement}>
            <MenuItem onClick={handleProfileClick}>
                <ListItemIcon>
                    <img src={profileImage} alt="profile" />
                </ListItemIcon>
                Profile
            </MenuItem>
            <MenuItem onClick={handleLogoutClick}>
                <ListItemIcon>
                    <img src={logoutImage} alt="logout" />
                </ListItemIcon>
                Log out
            </MenuItem>
        </ParentMenu>
    );
};
