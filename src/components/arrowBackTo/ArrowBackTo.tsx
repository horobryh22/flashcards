import React from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink } from 'react-router-dom';

import classes from './ArrowBackTo.module.css';

import { CardsSearchParams } from 'api/types';
import { useAppDispatch } from 'hooks';
import { clearPackUserIdAC, setCardsSearchParamsAC } from 'store/actions';
import { ReturnComponentType } from 'types';

const CARD_PARAMS_STATE: Omit<CardsSearchParams, 'pageCount'> = {
    cardsPack_id: '',
    sortCards: '0updated',
    cardQuestion: '',
    max: 120,
    page: 1,
    min: 0,
    cardAnswer: '',
};

export const ArrowBackTo = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const handleClick = (): void => {
        dispatch(setCardsSearchParamsAC(CARD_PARAMS_STATE as CardsSearchParams));
        dispatch(clearPackUserIdAC());
    };

    return (
        <NavLink to="/packs" className={classes.arrow} onClick={handleClick}>
            <ArrowBackIcon />
            <span className={classes.title}>Back to Packs List</span>
        </NavLink>
    );
};
