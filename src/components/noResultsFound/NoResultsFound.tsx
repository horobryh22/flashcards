import React from 'react';

import classes from './NoResultsFound.module.css';

import { useTypedSelector } from 'hooks';
import { selectIsPacksFetched, selectPacksTotalCount } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const NoResultsFound = (): ReturnComponentType => {
    const cardPacksTotalCount = useTypedSelector(selectPacksTotalCount);
    const isPacksFetched = useTypedSelector(selectIsPacksFetched);

    if (cardPacksTotalCount) return null;

    return (
        <div>
            {isPacksFetched && cardPacksTotalCount ? null : (
                <h2 className={classes.title}>No results found</h2>
            )}
        </div>
    );
};
