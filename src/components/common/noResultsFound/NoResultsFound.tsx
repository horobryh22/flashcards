import React from 'react';

import classes from './NoResultsFound.module.css';
import { NoResultsFoundType } from './types';

import { ReturnComponentType } from 'types';

export const NoResultsFound = ({
    isItemsFetched,
    totalCount,
}: NoResultsFoundType): ReturnComponentType => {
    if (totalCount) return null;

    return (
        <div>
            {isItemsFetched && totalCount ? null : (
                <h2 className={classes.title}>No results found</h2>
            )}
        </div>
    );
};
