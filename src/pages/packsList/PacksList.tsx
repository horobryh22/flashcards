import React, { useEffect } from 'react';

import { Grid } from '@mui/material';
import { Navigate, useSearchParams } from 'react-router-dom';

import { SortTypes } from 'api/types';
import {
    CardsTopContent,
    CustomPagination,
    ModalParent,
    OverTableRow,
    TableComponent,
} from 'components';
import { DEFAULT_PAGE_COUNT, MAX_CARDS_COUNT } from 'constant';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setModalStateAC, setModalTypeAC, setSearchParamsAC } from 'store/actions';
import { fetchPacks } from 'store/middlewares';
import { selectIsOpen, selectIsUserAuth, selectPacksInitialized } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const PacksList = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [searchParams] = useSearchParams();

    const isOpen = useTypedSelector(selectIsOpen);

    const isUserAuth = useTypedSelector(selectIsUserAuth);
    const isPacksInitialized = useTypedSelector(selectPacksInitialized);

    const paramMin = Number(searchParams.get('min')) || 0;
    const paramMax = Number(searchParams.get('max')) || MAX_CARDS_COUNT;
    const paramSortPacks = searchParams.get('sortPacks') || '0updated';
    const paramPage = Number(searchParams.get('page')) || 1;
    const paramPageCount = Number(searchParams.get('pageCount')) || DEFAULT_PAGE_COUNT;
    const paramPackName = searchParams.get('packName') || '';
    const paramUser_id = searchParams.get('user_id') || '';

    const handleClick = (): void => {
        dispatch(
            setModalTypeAC({
                isOpen: true,
                type: 'addPack',
                modalTitle: 'Add new pack',
                buttonName: 'Save',
            }),
        );
    };

    const onClose = (): void => {
        dispatch(setModalStateAC(false));
    };

    useEffect(() => {
        if (isPacksInitialized) {
            dispatch(fetchPacks());
        }
    }, [
        paramMin,
        paramMax,
        paramUser_id,
        paramPage,
        paramPackName,
        paramPageCount,
        paramSortPacks,
        isPacksInitialized,
    ]);

    useEffect(() => {
        const params = {
            min: paramMin,
            max: paramMax,
            packName: paramPackName,
            sortPacks: paramSortPacks as SortTypes,
            page: paramPage,
            pageCount: paramPageCount,
            user_id: paramUser_id,
        };

        if (isUserAuth) {
            dispatch(setSearchParamsAC(params));
        }
    }, [isUserAuth]);

    if (!isUserAuth) {
        return <Navigate to="/login" />;
    }

    return (
        <Grid justifyContent="center" alignContent="flex-end">
            <CardsTopContent
                title="Packs list"
                buttonName="Add new pack"
                isButtonNeed
                callback={handleClick}
            />
            <OverTableRow />
            <TableComponent />
            <CustomPagination />
            <ModalParent open={isOpen} onClose={onClose} />
        </Grid>
    );
};
