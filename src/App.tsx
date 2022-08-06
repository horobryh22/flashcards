import React, { useEffect } from 'react';

import { CircularProgress, LinearProgress } from '@mui/material';

import { Header, Links, RoutesApp, SnackBar } from 'components';
import { PROGRESS_STYLE } from 'constant';
import { REQUEST_STATUS } from 'enums';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { fetchPacks, initializedApp } from 'store/middlewares';
import {
    selectAppStatus,
    selectId,
    selectIsInitialized,
    selectIsUserAuth,
    selectMax,
    selectMin,
    selectPackName,
    selectPage,
    selectPageCount,
    selectSortPacks,
} from 'store/selectors';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const status = useTypedSelector(selectAppStatus);
    const isUserAuth = useTypedSelector(selectIsUserAuth);
    const isInitialized = useTypedSelector(selectIsInitialized);

    const min = useTypedSelector(selectMin);
    const max = useTypedSelector(selectMax);
    const sortPacks = useTypedSelector(selectSortPacks);
    const page = useTypedSelector(selectPage);
    const pageCount = useTypedSelector(selectPageCount);
    const packName = useTypedSelector(selectPackName);
    const id = useTypedSelector(selectId);

    useEffect(() => {
        dispatch(initializedApp());
    }, []);

    useEffect(() => {
        if (isUserAuth) {
            dispatch(fetchPacks());
        }
    }, [isUserAuth, sortPacks, page, pageCount, packName, min, max, id]);

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
