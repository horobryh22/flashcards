import React, { useMemo } from 'react';

import { Pagination } from '@mui/material';

import classes from './CustomPagination.module.css';

import { CustomSelect } from 'components';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setCurrentPageAC } from 'store/actions';
import { selectPacksTotalCount, selectPage, selectPageCount } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const CustomPagination = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const page = useTypedSelector(selectPage);
    const pageCount = useTypedSelector(selectPageCount);
    const cardPacksTotalCount = useTypedSelector(selectPacksTotalCount);

    const count = useMemo(() => {
        return Math.ceil(cardPacksTotalCount / pageCount);
    }, [cardPacksTotalCount, pageCount]);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
        dispatch(setCurrentPageAC(value));
    };

    return (
        <div className={classes.wrapper}>
            <Pagination
                count={count}
                page={page}
                onChange={handleChange}
                shape="circular"
                color="primary"
            />
            <div className={classes.selectWrapper}>
                <span>Show</span>
                <CustomSelect />
                <span>cards per page</span>
            </div>
        </div>
    );
};
