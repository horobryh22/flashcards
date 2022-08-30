import React from 'react';

import classes from './PackCover.module.css';

import { useTypedSelector } from 'hooks';
import { ReturnComponentType } from 'types';

export const PackCover = (): ReturnComponentType => {
    const packCover = useTypedSelector(state => state.cards.packDeckCover);

    if (!packCover) return null;

    return (
        <div className={classes.coverContainer}>
            <img src={packCover} alt="cover" />
        </div>
    );
};
