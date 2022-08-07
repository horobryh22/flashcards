import React, { useState } from 'react';

import { Button } from '@mui/material';

import { useAppDispatch, useTypedSelector } from 'hooks';
import { setIsMyPackAC } from 'store/actions';
// import { fetchPacks } from 'store/middlewares';
import { ReturnComponentType } from 'types';

export const ShowPacksCards = (): ReturnComponentType => {
    const dispatch = useAppDispatch();
    // const isMyPack = true;

    const { cardPacks } = useTypedSelector(state => state.packs);

    const [colorForButton, setcolorForButton] = useState('all');

    const allCardsHandler = (): void => {
        setcolorForButton('all');
        console.log(`cardPacks from all => ${cardPacks}`);
        dispatch(setIsMyPackAC(false));
    };

    const myCardsHandler = (): void => {
        setcolorForButton('myCards');
        dispatch(setIsMyPackAC(true));
        console.log(`cardPacks from my => ${cardPacks}`);
    };

    return (
        <div>
            <span>
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
            </span>

            <span>
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
            </span>
        </div>
    );
};
