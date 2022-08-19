import React from 'react';

import classes from './NoResultsFound.module.css';

import { useTypedSelector } from 'hooks';
import { selectPacksTotalCount } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const NoResultsFound = (): ReturnComponentType => {
    const cardPacksTotalCount = useTypedSelector(selectPacksTotalCount);

    if (cardPacksTotalCount) return null;

    return <h2 className={classes.title}>No results found</h2>;
};
