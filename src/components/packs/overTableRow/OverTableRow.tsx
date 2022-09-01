import React from 'react';

import classes from './OverTableRow.module.css';

import { FilterRemove, NumberOfCards, Search, ShowPacksCards } from 'components';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setPackNameAC } from 'store/actions';
import { selectIsPacksFetched, selectPackName } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const OverTableRow = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const isPacksFetched = useTypedSelector(selectIsPacksFetched);
    const packName = useTypedSelector(selectPackName);

    const handleValueChange = (value: string): void => {
        dispatch(setPackNameAC(value));
    };

    return (
        <div className={classes.wrapper}>
            <Search
                onChangeValue={handleValueChange}
                isDataFetched={isPacksFetched}
                fullWidth={false}
                uriParam="packName"
                style={{ width: `460px` }}
                defaultValue={packName}
            />
            <ShowPacksCards />
            <NumberOfCards />
            <FilterRemove />
        </div>
    );
};
