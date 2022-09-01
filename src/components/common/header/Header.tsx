import React from 'react';

import { Box, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';

import logo from 'assets/images/logo.svg';
import {
    StyledAppBar,
    StyledButton,
    StyledToolbar,
} from 'components/common/header/styles';
import { AccountMenu, AuthUserAvatar } from 'components/index';
import { useTypedSelector } from 'hooks';
import { selectIsUserAuth, selectUserName } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const Header = (): ReturnComponentType => {
    const [element, setElement] = React.useState<null | HTMLElement>(null);

    const open = Boolean(element);

    const isUserAuth = useTypedSelector(selectIsUserAuth);
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
                            <AuthUserAvatar
                                userName={userName}
                                open={open}
                                handleClick={handleClick}
                            />
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
