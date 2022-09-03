import React from 'react';

import { FormControl, FormGroup, FormLabel } from '@mui/material';
import { NavLink } from 'react-router-dom';

import classes from './CheckEmail.module.css';

import email from 'assets/images/email.svg';
import { StyledButton } from 'components/common/header/styles';
import { ReturnComponentType } from 'types';

export const CheckEmail = (): ReturnComponentType => {
    return (
        <div className={classes.formWrapper}>
            <h1 className={classes.title}>Check Email</h1>
            <FormControl fullWidth>
                <FormGroup>
                    <img src={email} alt="email" />
                    <FormLabel>
                        <p className={classes.label}>
                            We’ve sent an Email with instructions to example@mail.com
                        </p>
                    </FormLabel>
                    <NavLink to="/login">
                        <StyledButton type="submit" variant="contained" color="primary">
                            Back to login
                        </StyledButton>
                    </NavLink>
                </FormGroup>
            </FormControl>
        </div>
    );
};
