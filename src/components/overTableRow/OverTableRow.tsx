import React from 'react';

import classes from './OverTableRow.module.css';

import { FilterRemove, NumberOfCards, Search, ShowPacksCards } from 'components';
import { ReturnComponentType } from 'types';

export const OverTableRow = (): ReturnComponentType => {
    return (
        <div className={classes.wrapper}>
            <Search />
            <ShowPacksCards />
            <NumberOfCards />
            <FilterRemove />
        </div>
    );
};
