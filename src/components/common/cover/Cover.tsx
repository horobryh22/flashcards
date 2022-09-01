import React from 'react';

import classes from './Cover.module.css';
import { CoverType } from './types';

import { ReturnComponentType } from 'types';

export const Cover = ({ cover }: CoverType): ReturnComponentType => {
    if (!cover) return null;

    return (
        <div className={classes.coverContainer}>
            <img className={classes.cover} src={cover} alt="cover" />
        </div>
    );
};
