import React from 'react';

import classes from './PackCover.module.css';

import { useTypedSelector } from 'hooks';
import { selectPackCover } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const PackCover = (): ReturnComponentType => {
    const packCover = useTypedSelector(selectPackCover);

    if (!packCover) return null;

    return (
        <div className={classes.coverContainer}>
            <img src={packCover} alt="cover" />
        </div>
    );
};
