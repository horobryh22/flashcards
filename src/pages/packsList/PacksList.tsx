import React from 'react';

import { CardsTopContent, CustomPagination, Search, TableComponent } from 'components';
import { NumberOfCards } from 'components/overTableRow/NumberOfCards';
import { ShowPacksCards } from 'components/overTableRow/ShowPacksCards';
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
            <Search />
            <NumberOfCards />
            <ShowPacksCards />
            <CardsTopContent
                title="Packs list"
                buttonName="Add new pack"
                isButtonNeed
                callback={addPack}
            />
            <TableComponent />
            <CustomPagination />
        </>
    );
};
