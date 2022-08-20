import React, { useEffect } from 'react';

import { Backdrop, CircularProgress } from '@mui/material';

import { Header, RoutesApp, SnackBar } from 'components';
import { REQUEST_STATUS } from 'enums';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { initializedApp } from 'store/middlewares';
import { selectAppStatus, selectIsInitialized } from 'store/selectors';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const status = useTypedSelector(selectAppStatus);
    const isInitialized = useTypedSelector(selectIsInitialized);

    useEffect(() => {
        dispatch(initializedApp());
    }, []);

    if (!isInitialized) {
        return (
            <div
                style={{
                    position: 'fixed',
                    top: '47%',
                    textAlign: 'center',
                    width: '100%',
                }}
            >
                <CircularProgress />
            </div>
        );
    }

    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
                open={status === REQUEST_STATUS.LOADING}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Header />
            <RoutesApp />
            <SnackBar />
        </>
    );
};

export default App;
