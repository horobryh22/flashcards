import React from 'react';

import { Box, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { StyledAppBar, StyledButton, StyledToolbar } from './styles';

import logo from 'assets/images/logo.svg';
import { UserPhoto } from 'components';
import { useTypedSelector } from 'hooks';
import { selectIsUserAuth } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const Header = (): ReturnComponentType => {
    const isUserAuth = useTypedSelector(selectIsUserAuth);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <StyledAppBar position="static">
                <Container>
                    <StyledToolbar>
                        <img src={logo} alt="logo" />
                        {isUserAuth ? (
                            <UserPhoto variant="small" />
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
