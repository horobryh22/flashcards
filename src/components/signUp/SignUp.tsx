import React, { useState } from 'react';

import { Container, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import classes from './SignUp.module.css';

import { RegisterUserDataType } from 'api/types';
import { FormBottomPart } from 'components';
import { SignUpFormType } from 'components/signUp/types';
import { EMAIL_REG_EXP } from 'constant';
import { useAppDispatch, useVisibility } from 'hooks';
import { registerUser } from 'store/middlewares';
import { ReturnComponentType } from 'types';

export const SignUp = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const [visible, visibility] = useVisibility(false);
    const [passError, setPassError] = useState('');
    const [success, setSuccess] = useState(false);

    const inputType = visibility ? 'text' : 'password';
    const wrapperCLassName = success ? 'success' : '';
    const intervalToRedirect = 700;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpFormType>({ mode: 'onBlur' });

    const onSubmit = (data: SignUpFormType): void => {
        if (data.password === data.passwordConfirm) {
            dispatch(registerUser(data as RegisterUserDataType));
            setSuccess(true);
            setTimeout(() => {
                navigate('/login');
            }, intervalToRedirect);
        } else {
            setPassError('passwords do not match');
        }
    };

    return (
        <div className={`${classes.wrapper} ${classes[wrapperCLassName]}`}>
            <Container>
                <h1 className={classes.title}>Sign Up</h1>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        {...register('email', {
                            required: true,
                            pattern: {
                                value: EMAIL_REG_EXP,
                                message: 'Not valid email',
                            },
                        })}
                        fullWidth
                        margin="normal"
                        variant="standard"
                        label="Email"
                    />
                    <p className={classes.errorWrapper}>
                        {errors?.email && (
                            <span className={classes.error}>
                                {errors.email.message || 'Required'}
                            </span>
                        )}
                    </p>
                    <div className={classes.formGroup}>
                        <TextField
                            {...register('password', {
                                required: true,
                                minLength: {
                                    value: 8,
                                    message: 'Min length is 8',
                                },
                            })}
                            fullWidth
                            type={inputType}
                            margin="normal"
                            label="Password"
                            variant="standard"
                        />
                        {visible}
                    </div>
                    <p className={classes.errorWrapper}>
                        {errors?.password && (
                            <span className={classes.error}>
                                {errors.password.message || 'Required'}
                            </span>
                        )}
                    </p>
                    <div className={classes.formGroup}>
                        <TextField
                            {...register('passwordConfirm')}
                            fullWidth
                            type={inputType}
                            margin="normal"
                            label="Confirm Password"
                            variant="standard"
                        />
                        {visible}
                    </div>
                    <p className={classes.errorWrapper}>
                        <span className={classes.error}>{passError}</span>
                    </p>
                    <FormBottomPart
                        buttonName="Sign Up"
                        helperText="Already have an account?"
                        linkText="Sign In"
                        redirectTo="/login"
                    />
                </form>
            </Container>
        </div>
    );
};
