import React, { useEffect } from 'react';

import { Backdrop, CircularProgress } from '@mui/material';

import { Header, ModalParent, RoutesApp, SimpleSnackBar, SnackBar } from 'components';
import { REQUEST_STATUS } from 'enums';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setModalTypeAC } from 'store/actions';
import { initializedApp } from 'store/middlewares';
import { selectAppStatus, selectIsInitialized, selectIsOpen } from 'store/selectors';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const status = useTypedSelector(selectAppStatus);
    const isInitialized = useTypedSelector(selectIsInitialized);
    const isOpen = useTypedSelector(selectIsOpen);

    useEffect(() => {
        dispatch(initializedApp());
    }, []);

    const onClose = (): void => {
        dispatch(
            setModalTypeAC({
                questionFormat: 'text',
                answerImg: '',
                questionImg: '',
                isOpen: false,
                type: '',
                modalTitle: '',
                buttonName: '',
            }),
        );
    };

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
            <SimpleSnackBar />
            <ModalParent open={isOpen} onClose={onClose} />
        </>
    );
};

export default App;
