import React from 'react';

import { Container, Grid } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';

import {
    ForgotPassword,
    NotFound,
    PacksList,
    Profile,
    SetNewPassword,
    SignIn,
} from 'pages';
import { Cards } from 'pages/cards/Cards';
import { LearnCard } from 'pages/learnCard/LearnCard';
import { SignUp } from 'pages/signUp/SignUp';
import { ReturnComponentType } from 'types';

export const RoutesApp = (): ReturnComponentType => {
    return (
        <Container fixed>
            <Grid container justifyContent="center">
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="login" element={<SignIn />} />
                    <Route path="packs" element={<PacksList />} />
                    <Route path="packs/:cardsPack_id" element={<Cards />} />
                    <Route path="registration" element={<SignUp />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="password_recovery/:token" element={<SetNewPassword />} />
                    <Route path="enter_new_password" element={<ForgotPassword />} />
                    <Route path="learn/:card_id" element={<LearnCard />} />
                    <Route path="error" element={<NotFound />} />
                    <Route path="*" element={<Navigate to="error" />} />
                </Routes>
            </Grid>
        </Container>
    );
};
