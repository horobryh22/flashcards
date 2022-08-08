import React, { useEffect } from 'react';

import {
    CardsTopContent,
    CustomPagination,
    ModalParent,
    OverTableRow,
    TableComponent,
} from 'components';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setModalStateAC, setModalTypeAC } from 'store/actions';
import { fetchPacks } from 'store/middlewares';
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

    const isOpen = useTypedSelector(state => state.app.modal.isOpen);

    const isUserAuth = useTypedSelector(selectIsUserAuth);

    const min = useTypedSelector(selectMin);
    const max = useTypedSelector(selectMax);
    const sortPacks = useTypedSelector(selectSortPacks);
    const page = useTypedSelector(selectPage);
    const pageCount = useTypedSelector(selectPageCount);
    const packName = useTypedSelector(selectPackName);
    const id = useTypedSelector(selectId);

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
            dispatch(fetchPacks());
        }
    }, [isUserAuth, sortPacks, page, pageCount, packName, min, max, id]);

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
