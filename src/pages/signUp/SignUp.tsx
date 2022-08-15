import React from 'react';

import { FormControl, FormGroup, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import classes from './SignUp.module.css';
import { SignUpFormType } from './types';

import { FormBottomPart } from 'components';
import { EMAIL_RULES, PASSWORD_RULES } from 'constant';
import { useAppDispatch, useVisibility } from 'hooks';
import { registerUser } from 'store/middlewares';
import { ReturnComponentType } from 'types';

const INTERVAL_TO_REDIRECT = 1000;

export const SignUp = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const [visible, visibility] = useVisibility(false);

    const {
        control,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<SignUpFormType>({ mode: 'onBlur' });

    const onSubmit = ({ email, password, passwordConfirm }: SignUpFormType): void => {
        if (password !== passwordConfirm) {
            setError('passwordConfirm', { message: 'Passwords should be the same' });

            return;
        }

        dispatch(registerUser({ email, password }));
        setTimeout(() => {
            navigate('/login');
        }, INTERVAL_TO_REDIRECT);
    };

    return (
        <div className={classes.formWrapper}>
            <h1 className={classes.title}>Sign Up</h1>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <FormControl fullWidth>
                    <FormGroup>
                        <Controller
                            name="email"
                            control={control}
                            rules={EMAIL_RULES}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    variant="standard"
                                    label="Email"
                                    margin="normal"
                                    color={`${errors.email ? 'error' : 'primary'}`}
                                />
                            )}
                        />
                        <div className={classes.error}>{errors.email?.message}</div>
                        <Controller
                            name="password"
                            control={control}
                            rules={PASSWORD_RULES}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    variant="standard"
                                    type={`${visibility ? 'text' : 'password'}`}
                                    label="Password"
                                    margin="normal"
                                    color={`${errors.password ? 'error' : 'primary'}`}
                                    InputProps={{
                                        endAdornment: visible,
                                    }}
                                />
                            )}
                        />
                        <div className={classes.error}>{errors.password?.message}</div>
                        <Controller
                            name="passwordConfirm"
                            control={control}
                            rules={PASSWORD_RULES}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    variant="standard"
                                    type={`${visibility ? 'text' : 'password'}`}
                                    label="Password"
                                    margin="normal"
                                    color={`${errors.password ? 'error' : 'primary'}`}
                                    InputProps={{
                                        endAdornment: visible,
                                    }}
                                />
                            )}
                        />
                        <div className={classes.error}>
                            {errors.passwordConfirm?.message}
                        </div>
                        <FormBottomPart
                            buttonName="Sign Up"
                            helperText="Already have an account?"
                            linkText="Sign In"
                            redirectTo="/login"
                        />
                    </FormGroup>
                </FormControl>
            </form>
        </div>
    );
};
