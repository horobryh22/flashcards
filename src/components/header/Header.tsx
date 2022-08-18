import React from 'react';

import { Avatar, Box, Container, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';
import { StyledAppBar, StyledButton, StyledToolbar } from './styles';

import defaultAvatar from 'assets/images/defaultAvatar.jpg';
import logo from 'assets/images/logo.svg';
import { AccountMenu } from 'components';
import { useTypedSelector } from 'hooks';
import { selectAvatar, selectIsUserAuth, selectUserName } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const Header = (): ReturnComponentType => {
    const [element, setElement] = React.useState<null | HTMLElement>(null);

    const open = Boolean(element);

    const isUserAuth = useTypedSelector(selectIsUserAuth);
    const avatar = useTypedSelector(selectAvatar);
    const userName = useTypedSelector(selectUserName);

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
                            <div
                                aria-hidden="true"
                                className={classes.contentWrapper}
                                onClick={handleClick}
                            >
                                <div className={classes.userName}>{userName}</div>
                                <IconButton
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
                            </div>
                        ) : (
                            <NavLink to="/login" style={{ textDecoration: 'none' }}>
                                <StyledButton variant="contained">Sign In</StyledButton>
                            </NavLink>
                        )}
                        <AccountMenu
                            open={open}
                            element={element}
                            setElement={setElement}
                        />
                    </StyledToolbar>
                </Container>
            </StyledAppBar>
        </Box>
    );
};
