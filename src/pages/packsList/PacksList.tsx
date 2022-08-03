import React from 'react';

import { CardsTopContent, TableComponent, CustomPagination, Search } from 'components';
import { useAppDispatch } from 'hooks';
import { addCardsPack } from 'store/middlewares';
import { ReturnComponentType } from 'types';

export const PacksList = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const addPack = (): void => {
        dispatch(addCardsPack('Test pack'));
    };

    return (
        <>
            <CardsTopContent
                title="Packs list"
                buttonName="Add new pack"
                isButtonNeed
                callback={addPack}
            />
            <Search />
            <TableComponent />
            <CustomPagination />
        </>
    );
};
