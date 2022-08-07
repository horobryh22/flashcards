import React, { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';

import { CardsPackType } from 'api/types';
import {
    AddPackModal,
    CardsTopContent,
    CustomPagination,
    OverTableRow,
    TableComponent,
} from 'components';
import { DELAY } from 'constant';
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

    const [openAddPackModal, setOpenAddPackModal] = useState(false);

    const { control, handleSubmit, getValues, reset } = useForm({
        defaultValues: {
            name: '',
            private: false,
        },
        mode: 'onSubmit',
    });

    const onSubmit = (values: CardsPackType): void => {
        dispatch(addCardsPack(values));

        setTimeout(() => {
            setOpenAddPackModal(false);
            reset();
        }, DELAY);
    };

    const isUserAuth = useTypedSelector(selectIsUserAuth);

    const min = useTypedSelector(selectMin);
    const max = useTypedSelector(selectMax);
    const sortPacks = useTypedSelector(selectSortPacks);
    const page = useTypedSelector(selectPage);
    const pageCount = useTypedSelector(selectPageCount);
    const packName = useTypedSelector(selectPackName);
    const id = useTypedSelector(selectId);

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
                callback={() => setOpenAddPackModal(true)}
            />
            <OverTableRow />
            <TableComponent />
            <CustomPagination />
            <form onSubmit={handleSubmit(onSubmit)}>
                <AddPackModal
                    open={openAddPackModal}
                    onClose={() => setOpenAddPackModal(false)}
                    control={control}
                    getValues={getValues}
                />
            </form>
        </>
    );
};
