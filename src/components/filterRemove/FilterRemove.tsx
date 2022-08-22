import React from 'react';

import { useSearchParams } from 'react-router-dom';

import classes from './FilterRemove.module.css';

import { SearchParamsType } from 'api/types';
import removeImage from 'assets/images/filter-remove.svg';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setSearchParamsAC } from 'store/actions';
import { selectPackName } from 'store/selectors';
import { ReturnComponentType } from 'types';

const INITIAL_PARAMS: SearchParamsType = {
    min: 0,
    max: 120,
    packName: '',
    sortPacks: '0updated',
    page: 1,
    pageCount: 6,
    user_id: '',
};

export const FilterRemove = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [, setSearchParams] = useSearchParams();
    const packName = useTypedSelector(selectPackName);

    const handleClick = (): void => {
        dispatch(setSearchParamsAC({ ...INITIAL_PARAMS, packName }));
        setSearchParams({ packName });
    };

    return (
        <button type="button" className={classes.button} onClick={handleClick}>
            <img src={removeImage} alt="filter-remove" />
        </button>
    );
};
