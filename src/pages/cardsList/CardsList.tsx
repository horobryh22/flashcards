import React, { useEffect } from 'react';

import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

import {
    CardsTopContent,
    CustomPagination,
    ModalParent,
    Search,
    TableComponent,
} from 'components';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { fetchCards } from 'store/middlewares/cards/fetchCards';
import { ReturnComponentType } from 'types';

export const CardsList = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const { packId } = useParams();
    const packs = useTypedSelector(state => state.packs.cardPacks);

    const pack = packs?.find(pack => pack._id === packId);

    useEffect(() => {
        if (packId) {
            dispatch(fetchCards(packId));
        }
    }, [packId]);

    return (
        <Grid justifyContent="center" alignContent="flex-end">
            <CardsTopContent
                title={pack?.name || ''}
                buttonName="Add new card"
                isButtonNeed
                callback={() => {}}
            />
            <Search />
            <TableComponent />
            <CustomPagination />
            <ModalParent open={false} onClose={() => {}} />
        </Grid>
    );
};
