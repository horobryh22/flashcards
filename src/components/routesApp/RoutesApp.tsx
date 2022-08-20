import React from 'react';

import { Container, Grid } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';

import {
    CardsList,
    ForgotPassword,
    NotFound,
    PacksList,
    Profile,
    SetNewPassword,
    SignIn,
    SignUp,
} from 'pages';
import { ReturnComponentType } from 'types';

export const RoutesApp = (): ReturnComponentType => {
    return (
        <Container fixed>
            <Grid container justifyContent="center">
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="login" element={<SignIn />} />
                    <Route path="packs" element={<PacksList />} />
                    <Route path="packs/:packId" element={<CardsList />} />
                    <Route path="registration" element={<SignUp />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="password_recovery/:token" element={<SetNewPassword />} />
                    <Route path="enter_new_password" element={<ForgotPassword />} />
                    <Route path="error" element={<NotFound />} />
                    <Route path="*" element={<Navigate to="error" />} />
                </Routes>
            </Grid>
        </Container>
    );
};
