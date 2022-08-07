import React, { useEffect } from 'react';

import {
    AddPackModal,
    CardsTopContent,
    CustomPagination,
    OverTableRow,
    TableComponent,
} from 'components';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { addCardsPack, fetchPacks } from 'store/middlewares';
import {
    selectId,
    selectIsUserAuth,
    selectMax,
    selectMin,
    selectPackName,
    selectPage,
    selectPageCount,
    selectSortPacks,
} from 'store/selectors';
import { ReturnComponentType } from 'types';

export const PacksList = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const isUserAuth = useTypedSelector(selectIsUserAuth);

    const min = useTypedSelector(selectMin);
    const max = useTypedSelector(selectMax);
    const sortPacks = useTypedSelector(selectSortPacks);
    const page = useTypedSelector(selectPage);
    const pageCount = useTypedSelector(selectPageCount);
    const packName = useTypedSelector(selectPackName);
    const id = useTypedSelector(selectId);

    const addPack = (): void => {
        dispatch(addCardsPack('Test pack'));
    };

    useEffect(() => {
        if (isUserAuth) {
            dispatch(fetchPacks());
        }
    }, [isUserAuth, sortPacks, page, pageCount, packName, min, max, id]);

    return (
        <>
            <CardsTopContent
                title="Packs list"
                buttonName="Add new pack"
                isButtonNeed
                callback={addPack}
            />
            <OverTableRow />
            <TableComponent />
            <CustomPagination />
            <AddPackModal />
        </>
    );
};
