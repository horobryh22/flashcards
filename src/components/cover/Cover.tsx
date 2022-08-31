import React from 'react';

import classes from './Cover.module.css';

import { Nullable, ReturnComponentType } from 'types';

export type CoverType = {
    cover: Nullable<string>;
};

export const Cover = ({ cover }: CoverType): ReturnComponentType => {
    if (!cover) return null;

    return (
        <div className={classes.coverContainer}>
            <img className={classes.cover} src={cover} alt="cover" />
        </div>
    );
};
