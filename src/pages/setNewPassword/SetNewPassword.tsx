import React from 'react';

import { FormControl, FormGroup, FormLabel } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Navigate, useParams } from 'react-router-dom';

import classes from './SetNewPassword.module.css';

import { FormInput } from 'components';
import { StyledButton } from 'components/common/header/styles';
import { PASSWORD_RULES } from 'constant';
import { useAppDispatch, useTypedSelector, useVisibility } from 'hooks';
import { setNewPassword } from 'store/middlewares';
import { selectGoToLogin, selectIsUserAuth } from 'store/selectors';
import { AllValuesFormType, ReturnComponentType } from 'types';

export const SetNewPassword = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const { token } = useParams();

    const goToLogin = useTypedSelector(selectGoToLogin);

    const [visible, visibility] = useVisibility(false);

    const isUserAuth = useTypedSelector(selectIsUserAuth);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<AllValuesFormType>({
        defaultValues: {
            password: '',
        },
        mode: 'onChange',
    });

    const onSubmit = ({ password }: { password: string }): void => {
        if (token) {
            dispatch(setNewPassword(password, token));
        }
    };

    if (goToLogin) return <Navigate to="/login" />;

    if (isUserAuth) return <Navigate to="/profile" />;

    return (
        <div className={classes.formWrapper}>
            <h1 className={classes.title}>Create new password</h1>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <FormControl fullWidth>
                    <FormGroup>
                        <FormInput
                            control={control}
                            rules={PASSWORD_RULES}
                            name="password"
                            variant="standard"
                            type={`${visibility ? 'text' : 'password'}`}
                            label="Password"
                            margin="normal"
                            color={`${errors.password ? 'error' : 'primary'}`}
                            InputProps={{
                                endAdornment: visible,
                            }}
                        />
                        <div className={classes.error}>{errors.password?.message}</div>
                        <FormLabel>
                            <p className={classes.label}>
                                Create new password and we will send you further
                                instructions to email
                            </p>
                        </FormLabel>
                        <StyledButton type="submit" variant="contained" color="primary">
                            Create new password
                        </StyledButton>
                    </FormGroup>
                </FormControl>
            </form>
        </div>
    );
};
