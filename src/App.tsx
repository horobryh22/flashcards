import React, { useEffect } from 'react';

import { CircularProgress, LinearProgress } from '@mui/material';

import { Header, RoutesApp, SnackBar } from 'components';
import { PROGRESS_STYLE } from 'constant';
import { REQUEST_STATUS } from 'enums';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { fetchPacks, initializedApp } from 'store/middlewares';
import {
    selectAppStatus,
    selectIsInitialized,
    selectIsUserAuth,
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

    const min = useTypedSelector(state => state.packs.searchParams.min);
    const max = useTypedSelector(state => state.packs.searchParams.max);
    const isMyPack = useTypedSelector(state => state.packs.isMyPack);
    const sortPacks = useTypedSelector(selectSortPacks);
    const page = useTypedSelector(selectPage);
    const pageCount = useTypedSelector(selectPageCount);
    const packName = useTypedSelector(selectPackName);

    useEffect(() => {
        dispatch(initializedApp());
    }, []);

    useEffect(() => {
        if (isUserAuth) {
            dispatch(fetchPacks());
        }
    }, [isUserAuth, sortPacks, page, pageCount, packName, min, max, isMyPack]);

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
            <SnackBar />
        </>
    );
};

export default App;
