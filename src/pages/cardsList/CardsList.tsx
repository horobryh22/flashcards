import React, { useEffect } from 'react';

import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

import { ArrowBackTo, CardsTable, CardsTopContent, Search } from 'components';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { fetchCards } from 'store/middlewares';
import { selectAuthUserId } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const CardsList = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const { packId } = useParams();

    const packName = useTypedSelector(state => state.cards.packName);
    const isCardsFetched = useTypedSelector(state => state.cards.isCardsFetched);
    const authUserId = useTypedSelector(selectAuthUserId);
    const packUserId = useTypedSelector(state => state.cards.packUserId);

    const buttonNameCondition =
        authUserId === packUserId ? 'Add new card' : 'Learn to pack';

    useEffect(() => {
        if (packId) {
            dispatch(fetchCards(packId));
        }
    }, [packId]);

    return (
        <Grid justifyContent="center" alignContent="flex-end" width="100%">
            <ArrowBackTo />
            <CardsTopContent
                title={packName || 'DEFAULT NAME'}
                buttonName={buttonNameCondition}
                isButtonNeed
                callback={() => {}}
                style={{ marginTop: '50px' }}
            />
            <Search uriParam="cardQuestion" fullWidth isDataFetched={isCardsFetched} />
            <CardsTable />
            {/* <CustomPagination /> */}
            {/* <ModalParent open={false} onClose={() => {}} /> */}
        </Grid>
    );
};
