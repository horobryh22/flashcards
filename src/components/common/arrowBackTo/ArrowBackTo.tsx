import React from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink } from 'react-router-dom';

import classes from './ArrowBackTo.module.css';

import { CARDS_PARAMS_STATE } from 'constant';
import { useAppDispatch } from 'hooks';
import { clearPackUserIdAC, setCardsSearchParamsAC } from 'store/actions';
import { ReturnComponentType } from 'types';

export const ArrowBackTo = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const handleClick = (): void => {
        dispatch(setCardsSearchParamsAC(CARDS_PARAMS_STATE));
        dispatch(clearPackUserIdAC());
    };

    return (
        <NavLink to="/packs" className={classes.arrow} onClick={handleClick}>
            <ArrowBackIcon />
            <span className={classes.title}>Back to Packs List</span>
        </NavLink>
    );
};
