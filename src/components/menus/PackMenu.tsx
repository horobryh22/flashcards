import React from 'react';

import { ListItemIcon, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import edit from 'assets/images/edit.svg';
import knowledge from 'assets/images/knowledge.svg';
import remove from 'assets/images/remove.svg';
import { ParentMenu } from 'components';
import { useAppDispatch } from 'hooks';
import { logout } from 'store/middlewares';
import { MenuType, ReturnComponentType } from 'types';

export const PackMenu = ({
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
                    <img src={edit} alt="edit" />
                </ListItemIcon>
                Edit
            </MenuItem>
            <MenuItem onClick={handleLogoutClick}>
                <ListItemIcon>
                    <img src={remove} alt="remove" />
                </ListItemIcon>
                Delete
            </MenuItem>
            <MenuItem onClick={handleLogoutClick}>
                <ListItemIcon>
                    <img src={knowledge} alt="knowledge" />
                </ListItemIcon>
                Learn
            </MenuItem>
        </ParentMenu>
    );
};
