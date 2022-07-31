import React from 'react';

import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import { useAppDispatch, useTypedSelector } from 'hooks';
import { selectAuthError, selectAuthInfo } from 'store';
import { setAuthErrorAC } from 'store/actions';
import { setAuthInfoAC } from 'store/actions/auth';
import { ReturnComponentType } from 'types';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SnackBar = (): ReturnComponentType => {
    const dispatch = useAppDispatch();
    const error = useTypedSelector(selectAuthError);
    const info = useTypedSelector(selectAuthInfo);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string): void => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setAuthErrorAC(null));
        dispatch(setAuthInfoAC(null));
    };

    return (
        <Snackbar
            open={Boolean(error || info)}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        >
            <Alert
                onClose={handleClose}
                severity={`${info === null ? 'error' : 'success'}`}
                sx={{ width: '100%' }}
            >
                {error || info}
            </Alert>
        </Snackbar>
    );
};
