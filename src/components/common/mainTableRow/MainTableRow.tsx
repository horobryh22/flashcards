import React, { useState } from 'react';

import { ArrowDropDown } from '@mui/icons-material';
import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import { MainTableRowType, OrderDirectionType } from './types';

import { CardsSortType } from 'api/types';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { selectIsPacksFetched } from 'store/selectors';
import { ColumnSortType, ReturnComponentType } from 'types';
import { handleSortType } from 'utils';

export const MainTableRow = ({
    columns,
    currentSort,
}: MainTableRowType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    const [nameDirection, setNameDirection] = useState<OrderDirectionType>('desc');
    const [cardsDirection, setCardsDirection] = useState<OrderDirectionType>('desc');
    const [updatedDirection, setUpdatedDirection] = useState<OrderDirectionType>('desc');
    const [answerDirection, setAnswerDirection] = useState<OrderDirectionType>('desc');
    const [questionDirection, setQuestionDirection] =
        useState<OrderDirectionType>('desc');
    const [gradeDirection, setGradeDirection] = useState<OrderDirectionType>('desc');

    const isPacksFetched = useTypedSelector(selectIsPacksFetched);

    const handleSortRequest = (sort: ColumnSortType | CardsSortType): void => {
        if (sort === 'name') {
            handleSortType(
                setNameDirection,
                nameDirection,
                sort,
                dispatch,
                searchParams,
                isPacksFetched,
            );
        }
        if (sort === 'cardsCount') {
            handleSortType(
                setCardsDirection,
                cardsDirection,
                sort,
                dispatch,
                searchParams,
                isPacksFetched,
            );
        }
        if (sort === 'updated') {
            handleSortType(
                setUpdatedDirection,
                updatedDirection,
                sort,
                dispatch,
                searchParams,
                isPacksFetched,
            );
        }
        if (sort === 'question') {
            handleSortType(
                setQuestionDirection,
                questionDirection,
                sort,
                dispatch,
                searchParams,
                isPacksFetched,
            );
        }
        if (sort === 'answer') {
            handleSortType(
                setAnswerDirection,
                answerDirection,
                sort,
                dispatch,
                searchParams,
                isPacksFetched,
            );
        }
        if (sort === 'grade') {
            handleSortType(
                setGradeDirection,
                gradeDirection,
                sort,
                dispatch,
                searchParams,
                isPacksFetched,
            );
        }

        setSearchParams(searchParams);
    };

    const mappedColumns = columns.map(column => {
        if (!column.sort) {
            return (
                <TableCell
                    key={column.id}
                    style={{
                        background: 'rgb(239,239,239)',
                        fontWeight: '600',
                        fontSize: '14px',
                        lineHeight: '17px',
                    }}
                    align={column.align}
                    padding="normal"
                    width={column.minWidth}
                >
                    {column.label}
                </TableCell>
            );
        }

        let direction;
        let sort;

        if (column.id === 'name') {
            direction = nameDirection;
            sort = 'name';
        }
        if (column.id === 'cardsCount') {
            direction = cardsDirection;
            sort = 'cardsCount';
        }
        if (column.id === 'updated') {
            direction = updatedDirection;
            sort = 'updated';
        }
        if (column.id === 'answer') {
            direction = answerDirection;
            sort = 'answer';
        }
        if (column.id === 'question') {
            direction = questionDirection;
            sort = 'question';
        }
        if (column.id === 'grade') {
            direction = gradeDirection;
            sort = 'grade';
        }

        return (
            <TableCell
                onClick={() => handleSortRequest(column.sort)}
                key={column.id}
                style={{
                    background: 'rgb(239,239,239)',
                    fontWeight: '600',
                    fontSize: '14px',
                    lineHeight: '17px',
                }}
                align={column.align}
                padding="normal"
                width={column.minWidth}
            >
                <TableSortLabel
                    active={currentSort.slice(1) === sort}
                    direction={direction}
                    IconComponent={ArrowDropDown}
                >
                    {column.label}
                </TableSortLabel>
            </TableCell>
        );
    });

    return (
        <TableHead>
            <TableRow>{mappedColumns}</TableRow>
        </TableHead>
    );
};
