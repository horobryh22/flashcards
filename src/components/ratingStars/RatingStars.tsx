import React from 'react';

import { Rating } from '@mui/material';
import { NavLink } from 'react-router-dom';

import classes from './RatingStars.module.css';

import edit from 'assets/images/edit.svg';
import remove from 'assets/images/remove.svg';
import { ReturnComponentType } from 'types';

export type RatingStarsType = {
    grade: number;
    isMyPack: boolean;
};

export const RatingStars = ({
    grade,
    isMyPack,
}: RatingStarsType): ReturnComponentType => {
    return (
        <div className={classes.wrapper}>
            <Rating name="read-only" value={grade} readOnly />
            {isMyPack ? (
                <div className={classes.actionImages}>
                    <NavLink to="" onClick={() => {}}>
                        <img src={edit} alt="edit" />
                    </NavLink>
                    <NavLink to="" onClick={() => {}}>
                        <img src={remove} alt="remove" />
                    </NavLink>
                </div>
            ) : null}
        </div>
    );
};
