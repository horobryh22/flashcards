import React, { useEffect } from 'react';

import { Grid } from '@mui/material';
import { Navigate, useSearchParams } from 'react-router-dom';

import { SortTypes } from 'api/types';
import {
    CardsTopContent,
    CustomPagination,
    ModalParent,
    OverTableRow,
    PacksTable,
} from 'components';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setModalStateAC, setModalTypeAC, setSearchParamsAC } from 'store/actions';
import { fetchPacks } from 'store/middlewares';
import {
    selectId,
    selectIsOpen,
    selectIsPacksFetched,
    selectIsUserAuth,
    selectMax,
    selectMin,
    selectPackName,
    selectPacksInitialized,
    selectPacksTotalCount,
    selectPage,
    selectPageCount,
    selectSortPacks,
} from 'store/selectors';
import { ReturnComponentType } from 'types';

export const PacksList = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [searchParams] = useSearchParams();

    const isOpen = useTypedSelector(selectIsOpen);

    const isUserAuth = useTypedSelector(selectIsUserAuth);
    const isPacksInitialized = useTypedSelector(selectPacksInitialized);

    const cardPacksTotalCount = useTypedSelector(selectPacksTotalCount);
    const isPacksFetched = useTypedSelector(selectIsPacksFetched);

    const min = useTypedSelector(selectMin);
    const max = useTypedSelector(selectMax);
    const sortPacks = useTypedSelector(selectSortPacks);
    const page = useTypedSelector(selectPage);
    const pageCount = useTypedSelector(selectPageCount);
    const packName = useTypedSelector(selectPackName);
    const userId = useTypedSelector(selectId);

    const paramMin = Number(searchParams.get('min')) || min;
    const paramMax = Number(searchParams.get('max')) || max;
    const paramSortPacks = searchParams.get('sortPacks') || sortPacks;
    const paramPage = Number(searchParams.get('page')) || page;
    const paramPageCount = Number(searchParams.get('pageCount')) || pageCount;
    const paramPackName = searchParams.get('packName') || packName;
    const paramUser_id = searchParams.get('user_id') || userId;

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
            <PacksTable />
            <CustomPagination
                page={paramPage}
                pageCount={paramPageCount}
                totalCount={cardPacksTotalCount}
                isItemsFetched={isPacksFetched}
            />
            <ModalParent open={isOpen} onClose={onClose} />
        </Grid>
    );
};
