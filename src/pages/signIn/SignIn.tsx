import React from 'react';

import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    TextField,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { Navigate, NavLink } from 'react-router-dom';

import classes from './SignIn.module.css';
import { SignInValuesType } from './types';

import { FormBottomPart } from 'components';
import { EMAIL_RULES, PASSWORD_RULES } from 'constant';
import { useAppDispatch, useTypedSelector, useVisibility } from 'hooks';
import { login } from 'store';
import { selectIsUserAuth } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const SignIn = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const isUserAuth = useTypedSelector(selectIsUserAuth);

    const {
        control,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        mode: 'onChange',
    });

    const [visible, visibility] = useVisibility(false);

    const onSubmit = (values: SignInValuesType): void => {
        dispatch(login(values));
    };

    if (isUserAuth) return <Navigate to="/profile" />;

    return (
        <div className={classes.formWrapper}>
            <h1 className={classes.title}>Sign In</h1>
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
                            name="rememberMe"
                            control={control}
                            render={({ field }) => (
                                <FormControlLabel
                                    {...field}
                                    label="Remember me"
                                    checked={getValues().rememberMe}
                                    control={<Checkbox />}
                                />
                            )}
                        />
                        <NavLink to="/enter_new_password">Forgot password?</NavLink>
                        <FormBottomPart
                            buttonName="Sign In"
                            helperText="Don’t have an account?"
                            linkText="Sign Up"
                            redirectTo="/registration"
                        />
                    </FormGroup>
                </FormControl>
            </form>
        </div>
    );
};
