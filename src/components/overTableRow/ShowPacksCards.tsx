import React, { useState } from 'react';

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
        console.log(`cardPacks from all = > ${cardPacks}`);
        dispatch(fetchPacks());
    };

    const myCardsHandler = (): void => {
        setcolorForButton('myCards');
        dispatch(fetchPacks(isMyPack));
        console.log(`cardPacks from my => ${cardPacks}`);
    };

    return (
        <div>
            <button
                type="button"
                style={{
                    height: '30px',
                    marginTop: '30px',
                    marginLeft: '20px',
                    backgroundColor: colorForButton === 'all' ? 'skyblue' : '',
                }}
                onClick={allCardsHandler}
            >
                ALL
            </button>
            <button
                type="button"
                style={{
                    height: '30px',
                    marginTop: '30px',
                    marginLeft: '5px',
                    backgroundColor: colorForButton === 'myCards' ? 'skyblue' : '',
                }}
                onClick={myCardsHandler}
            >
                MY CARDS
            </button>
        </div>
    );
};
