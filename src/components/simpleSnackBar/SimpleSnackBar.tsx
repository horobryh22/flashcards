import * as React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';

import { useAppDispatch, useTypedSelector } from 'hooks';
import { setAppInfoAC } from 'store/actions';
import { ReturnComponentType } from 'types';

export const SimpleSnackBar = (): ReturnComponentType => {
    const dispatch = useAppDispatch();
    const info = useTypedSelector(state => state.app.info);

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string): void => {
        if (reason === 'clickaway') {
            return;
        }

        dispatch(setAppInfoAC(null));
    };

    const action = (
        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon fontSize="small" />
        </IconButton>
    );

    return (
        <div>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={Boolean(info)}
                autoHideDuration={6000}
                onClose={handleClose}
                message={info}
                action={action}
            />
        </div>
    );
};
