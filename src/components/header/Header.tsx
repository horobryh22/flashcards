import React, { useState, MouseEvent } from 'react';

import { Box, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { StyledAppBar, StyledButton, StyledToolbar } from './styles';

import logo from 'assets/images/logo.svg';
import { ProfileList, UserPhoto } from 'components';
import { useTypedSelector } from 'hooks';
import { selectIsUserAuth } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const Header = (): ReturnComponentType => {
    const isUserAuth = useTypedSelector(selectIsUserAuth);

    const [opened, setOpened] = useState<boolean>(false);

    const onClose = (): void => {
        setOpened(false);
    };

    const onOpen = (e: MouseEvent): void => {
        e.stopPropagation();
        setOpened(!opened);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <StyledAppBar position="static">
                <Container>
                    <StyledToolbar>
                        <img src={logo} alt="logo" />
                        {isUserAuth ? (
                            <button
                                type="button"
                                onClick={onOpen}
                                style={{
                                    padding: '0',
                                    border: 'none',
                                    cursor: 'pointer',
                                    backgroundColor: 'inherit',
                                }}
                            >
                                <UserPhoto variant="small" />
                            </button>
                        ) : (
                            <NavLink to="/login" style={{ textDecoration: 'none' }}>
                                <StyledButton variant="contained">Sign In</StyledButton>
                            </NavLink>
                        )}
                        {opened && <ProfileList opened={opened} onClose={onClose} />}
                    </StyledToolbar>
                </Container>
            </StyledAppBar>
        </Box>
    );
};
