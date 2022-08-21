import React from 'react';

import { TableBody, TableCell, TableRow } from '@mui/material';

import classes from './CardsTableRows.module.css';
import { CardsTableRowsType } from './types';

import { RatingStars } from 'components';
import { CARDS_COLUMNS } from 'constant';
import { useTypedSelector } from 'hooks';
import { selectAuthUserId } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const CardsTableRows = ({ rows }: CardsTableRowsType): ReturnComponentType => {
    const authUserId = useTypedSelector(selectAuthUserId);

    const mappedRows = rows.map(row => {
        return (
            <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                {CARDS_COLUMNS.map(column => {
                    let value;

                    if (column.id !== 'grade') {
                        value = row[column.id];
                    }

                    if (column.id === 'updated') {
                        const date = new Date(row[column.id]);

                        value = date.toLocaleDateString();
                    }

                    return (
                        <TableCell key={column.id} align={column.align}>
                            {column.id !== 'grade' ? (
                                <div className={classes.nameWrapper}>{value}</div>
                            ) : (
                                <RatingStars
                                    grade={row.grade}
                                    isMyPack={authUserId === row.user_id}
                                />
                            )}
                        </TableCell>
                    );
                })}
            </TableRow>
        );
    });

    return <TableBody>{mappedRows}</TableBody>;
};
