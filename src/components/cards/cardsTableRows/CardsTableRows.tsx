import React from 'react';

import { TableBody, TableCell, TableRow } from '@mui/material';

import classes from './CardsTableRows.module.css';
import { CardsTableRowsType } from './types';

import { RatingStars } from 'components';
import { CARDS_COLUMNS } from 'constant';
import { ReturnComponentType } from 'types';
import { isBase64 } from 'utils';

export const CardsTableRows = ({ rows }: CardsTableRowsType): ReturnComponentType => {
    const mappedRows = rows.map(row => {
        return (
            <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                {CARDS_COLUMNS.map(column => {
                    let value;
                    let cover;

                    if (column.id === 'question') {
                        cover = row.questionImg;
                    }

                    if (column.id === 'answer') {
                        cover = row.answerImg;
                    }

                    if (column.id !== 'grade') {
                        value = row[column.id];
                    }

                    if (column.id === 'updated') {
                        const date = new Date(row[column.id]);

                        value = date.toLocaleDateString();
                    }

                    return (
                        <TableCell key={column.id} align={column.align}>
                            {cover && isBase64(cover) ? (
                                <div className={classes.coverContainer}>
                                    <img src={cover} alt="cover" />
                                </div>
                            ) : (
                                <div className={classes.nameWrapper}>{value}</div>
                            )}
                            {column.id === 'grade' && <RatingStars card={row} />}
                        </TableCell>
                    );
                })}
            </TableRow>
        );
    });

    return <TableBody>{mappedRows}</TableBody>;
};
