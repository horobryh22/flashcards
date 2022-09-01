import React from 'react';

import classes from './PackCoverIntoTable.module.css';
import { PackCoverIntoTableType } from './types';

import { ReturnComponentType } from 'types';
import { isBase64 } from 'utils';

export const PackCoverIntoTable = ({
    deckCover,
}: PackCoverIntoTableType): ReturnComponentType => {
    if (!deckCover) return null;

    return (
        <div className={classes.coverWrapper}>
            {isBase64(deckCover) && <img src={deckCover} alt="cover" />}
        </div>
    );
};
