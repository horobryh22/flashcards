import React, { useMemo } from 'react';

import { Pagination, Skeleton } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import classes from './CustomPagination.module.css';
import { CustomPaginationType } from './types';

import { CustomSelect } from 'components';
import { useAppDispatch } from 'hooks';
import { setCurrentPageAC } from 'store/actions';
import { ReturnComponentType } from 'types';

export const CustomPagination = ({
    isItemsFetched,
    totalCount,
    pageCount,
    page,
}: CustomPaginationType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    const count = useMemo(() => {
        return Math.ceil(totalCount / pageCount);
    }, [totalCount, pageCount]);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
        dispatch(setCurrentPageAC(value));
        searchParams.set('page', String(value));
        setSearchParams(searchParams);
    };

    return (
        <div className={classes.wrapper}>
            {isItemsFetched ? (
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
