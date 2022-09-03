import React from 'react';

import { FormControl, FormGroup, FormLabel } from '@mui/material';
import { useForm } from 'react-hook-form';

import classes from './ForgotPassword.module.css';

import { FormBottomPart, FormInput } from 'components';
import { EMAIL_RULES } from 'constant';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { CheckEmail } from 'pages';
import { forgot, selectIsEmailSent } from 'store';
import { AllValuesFormType, ReturnComponentType } from 'types';

export const ForgotPassword = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const isEmailSent = useTypedSelector(selectIsEmailSent);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<AllValuesFormType>({
        defaultValues: {
            email: '',
        },
        mode: 'onChange',
    });

    const onSubmit = ({ email }: { email: string }): void => {
        dispatch(forgot(email));
    };

    if (isEmailSent) return <CheckEmail />;

    return (
        <div className={classes.formWrapper}>
            <h1 className={classes.title}>Forgot your password?</h1>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <FormControl fullWidth>
                    <FormGroup>
                        <FormInput
                            name="email"
                            control={control}
                            rules={EMAIL_RULES}
                            variant="standard"
                            label="Email"
                            margin="normal"
                            color={`${errors.email ? 'error' : 'primary'}`}
                        />
                        <div className={classes.error}>{errors.email?.message}</div>
                        <FormLabel>
                            <p className={classes.label}>
                                Enter your email address and we will send you further
                                instructions
                            </p>
                        </FormLabel>
                        <FormBottomPart
                            buttonName="Send Instructions"
                            helperText="Did you remember your password?"
                            linkText="Try logging in"
                            redirectTo="/login"
                        />
                    </FormGroup>
                </FormControl>
            </form>
        </div>
    );
};
