import React from 'react';

import classes from './OverTableRow.module.css';

import { FilterRemove, NumberOfCards, Search, ShowPacksCards } from 'components';
import { useTypedSelector } from 'hooks';
import { selectIsPacksFetched } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const OverTableRow = (): ReturnComponentType => {
    const isPacksFetched = useTypedSelector(selectIsPacksFetched);

    return (
        <div className={classes.wrapper}>
            <Search
                isDataFetched={isPacksFetched}
                fullWidth={false}
                uriParam="packName"
            />
            <ShowPacksCards />
            <NumberOfCards />
            <FilterRemove />
        </div>
    );
};
