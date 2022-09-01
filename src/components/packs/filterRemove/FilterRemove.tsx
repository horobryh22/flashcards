import React from 'react';

import { useSearchParams } from 'react-router-dom';

import removeImage from 'assets/images/filter-remove.svg';
import classes from 'components/packs/filterRemove/FilterRemove.module.css';
import { PACKS_PARAM_STATE } from 'constant';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setSearchParamsAC } from 'store/actions';
import { selectPackName } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const FilterRemove = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [, setSearchParams] = useSearchParams();
    const packName = useTypedSelector(selectPackName);

    const handleClick = (): void => {
        dispatch(setSearchParamsAC({ ...PACKS_PARAM_STATE, packName }));
        setSearchParams({ packName });
    };

    return (
        <button type="button" className={classes.button} onClick={handleClick}>
            <img src={removeImage} alt="filter-remove" />
        </button>
    );
};
