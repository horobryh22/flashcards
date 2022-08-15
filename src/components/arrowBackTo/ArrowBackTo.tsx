import React from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink } from 'react-router-dom';

import classes from './ArrowBackTo.module.css';

import { ReturnComponentType } from 'types';

export const ArrowBackTo = (): ReturnComponentType => {
    return (
        <NavLink to="/packs" className={classes.arrow}>
            <ArrowBackIcon />
            <span className={classes.title}>Back to Packs List</span>
        </NavLink>
    );
};
