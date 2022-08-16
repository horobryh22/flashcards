import React from 'react';

import { Avatar, Box, Container, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { StyledAppBar, StyledButton, StyledToolbar } from './styles';

import defaultAvatar from 'assets/images/defaultAvatar.jpg';
import logo from 'assets/images/logo.svg';
import { useTypedSelector } from 'hooks';
import { selectIsUserAuth } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const Header = (): ReturnComponentType => {
    const isUserAuth = useTypedSelector(selectIsUserAuth);
    const avatar = useTypedSelector(state => state.auth.authUserData.avatar);

    const [element, setElement] = React.useState<null | HTMLElement>(null);

    const open = Boolean(element);

    const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
        setElement(event.currentTarget);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <StyledAppBar position="static">
                <Container>
                    <StyledToolbar>
                        <img src={logo} alt="logo" />
                        {isUserAuth ? (
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <Avatar
                                    alt="avatar"
                                    src={avatar || defaultAvatar}
                                    sx={{ width: 36, height: 36 }}
                                />
                            </IconButton>
                        ) : (
                            <NavLink to="/login" style={{ textDecoration: 'none' }}>
                                <StyledButton variant="contained">Sign In</StyledButton>
                            </NavLink>
                        )}
                    </StyledToolbar>
                </Container>
            </StyledAppBar>
        </Box>
    );
};
