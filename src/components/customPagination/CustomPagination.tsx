import React, { useMemo } from 'react';

import { Pagination, Skeleton } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import classes from './CustomPagination.module.css';
import { CustomPaginationType } from './types';

import { CustomSelect } from 'components';
import { useAppDispatch } from 'hooks';
import { setCardPageCountAC } from 'store/actions';
import { ReturnComponentType } from 'types';

// eslint-disable-next-line no-magic-numbers
const CARDS_PAGE_COUNT_VALUES = [2, 4, 6, 8, 10];

export const CustomPagination = ({
    isItemsFetched,
    totalCount,
    pageCount,
    page,
    setPage,
}: CustomPaginationType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    const count = useMemo(() => {
        return Math.ceil(totalCount / pageCount);
    }, [totalCount, pageCount]);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
        setPage(value);
        searchParams.set('page', String(value));
        setSearchParams(searchParams);
    };

    const handlePageCountChange = (pageCount: string): void => {
        dispatch(setCardPageCountAC(Number(pageCount)));
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
                        <CustomSelect
                            statePageCount={pageCount}
                            setPageCount={handlePageCountChange}
                            values={CARDS_PAGE_COUNT_VALUES}
                        />
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
