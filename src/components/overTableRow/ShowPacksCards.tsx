import React, { useState } from 'react';

import { Button } from '@mui/material';

import { useAppDispatch, useTypedSelector } from 'hooks';
import { fetchPacks } from 'store/middlewares';
import { ReturnComponentType } from 'types';

export const ShowPacksCards = (): ReturnComponentType => {
    const dispatch = useAppDispatch();
    const isMyPack = true;

    const { cardPacks } = useTypedSelector(state => state.packs);

    const [colorForButton, setcolorForButton] = useState('all');

    const allCardsHandler = (): void => {
        setcolorForButton('all');
        console.log(`cardPacks from all => ${cardPacks}`);
        dispatch(fetchPacks());
    };

    const myCardsHandler = (): void => {
        setcolorForButton('myCards');
        dispatch(fetchPacks(isMyPack));
        console.log(`cardPacks from my => ${cardPacks}`);
    };

    return (
        <div
            style={{
                position: 'absolute',
                marginTop: '96px',
                marginLeft: '500px',
            }}
        >
            <Button
                type="button"
                variant="contained"
                style={{
                    backgroundColor: colorForButton === 'all' ? 'green' : '',
                }}
                onClick={allCardsHandler}
            >
                All
            </Button>

            <Button
                type="button"
                variant="contained"
                style={{
                    backgroundColor: colorForButton === 'myCards' ? 'green' : '',
                }}
                onClick={myCardsHandler}
            >
                MY CARDS
            </Button>
        </div>
    );
};
