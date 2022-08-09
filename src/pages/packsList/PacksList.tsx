import React, { useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import { SortTypes } from 'api/types';
import {
    CardsTopContent,
    CustomPagination,
    ModalParent,
    OverTableRow,
    TableComponent,
} from 'components';
import { MAX_CARDS_COUNT } from 'constant';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setModalStateAC, setModalTypeAC } from 'store/actions';
import { fetchPacks } from 'store/middlewares';
import {
    selectIsOpen,
    selectIsUserAuth,
    selectPage,
    selectPageCount,
} from 'store/selectors';
import { ReturnComponentType } from 'types';

export const PacksList = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [searchParams] = useSearchParams();

    const isOpen = useTypedSelector(selectIsOpen);

    const isUserAuth = useTypedSelector(selectIsUserAuth);

    const paramMin = searchParams.get('min') || 0;
    const paramMax = searchParams.get('max') || MAX_CARDS_COUNT;
    const paramSort = searchParams.get('sortPacks') || '0updated';
    const page = useTypedSelector(selectPage);
    const pageCount = useTypedSelector(selectPageCount);
    const paramPackName = searchParams.get('packName') || '';
    const paramId = searchParams.get('user_id') || '';

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
        if (isUserAuth) {
            dispatch(
                fetchPacks(
                    paramId,
                    `${paramMin}`,
                    `${paramMax}`,
                    paramPackName,
                    paramSort as SortTypes,
                ),
            );
        }
    }, [
        isUserAuth,
        paramSort,
        page,
        pageCount,
        paramPackName,
        paramMin,
        paramMax,
        paramId,
    ]);

    return (
        <>
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
        </>
    );
};
