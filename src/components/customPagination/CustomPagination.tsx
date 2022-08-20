import React, { useMemo } from 'react';

import { Pagination, Skeleton } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import classes from './CustomPagination.module.css';

import { CustomSelect } from 'components/customSelect/CustomSelect';
import { DEFAULT_PAGE_COUNT } from 'constant';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setCurrentPageAC } from 'store/actions';
import { selectIsPacksFetched, selectPacksTotalCount } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const CustomPagination: any = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    const page = Number(searchParams.get('page')) || 1;
    const pageCount = Number(searchParams.get('pageCount')) || DEFAULT_PAGE_COUNT;
    const cardPacksTotalCount = useTypedSelector(selectPacksTotalCount);
    const isPacksFetched = useTypedSelector(selectIsPacksFetched);

    const count = useMemo(() => {
        return Math.ceil(cardPacksTotalCount / pageCount);
    }, [cardPacksTotalCount, pageCount]);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
        dispatch(setCurrentPageAC(value));
        searchParams.set('page', String(value));
        setSearchParams(searchParams);
    };

    return (
        <div className={classes.wrapper}>
            {isPacksFetched ? (
                <>
                    <Pagination
                        count={count || 1}
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
                </>
            ) : (
                <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width={600}
                    height={40}
                />
            )}
        </div>
    );
};
