import React, { useEffect } from 'react';

import { CircularProgress, LinearProgress } from '@mui/material';

import { Header, Links, RoutesApp, SnackBar } from 'components';
import { PROGRESS_STYLE } from 'constant';
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
                    top: '30%',
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
            {status === REQUEST_STATUS.LOADING && (
                <LinearProgress style={PROGRESS_STYLE} color="primary" />
            )}
            <Header />
            <RoutesApp />
            <Links />
            <SnackBar />
        </>
    );
};

export default App;
