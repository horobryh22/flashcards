import React from 'react';

import { TableBody, TableCell, TableRow } from '@mui/material';

import { TableRowsType } from './types';

import { ActionImages } from 'components';
import { PACK_COLUMNS } from 'constant';
import { ReturnComponentType } from 'types';

export const TableRows = ({ rows }: TableRowsType): ReturnComponentType => {
    const mappedRows = rows.map(row => {
        return (
            <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                {PACK_COLUMNS.map(column => {
                    let value;

                    if (column.id !== 'actions') {
                        value = row[column.id];
                    }

                    if (column.id === 'updated') {
                        const date = new Date(row[column.id]);

                        value = date.toLocaleDateString();
                    }

                    return (
                        <TableCell key={column.id} align={column.align}>
                            {column.id !== 'actions' ? (
                                value
                            ) : (
                                <ActionImages id={row._id} />
                            )}
                        </TableCell>
                    );
                })}
            </TableRow>
        );
    });

    return <TableBody>{mappedRows}</TableBody>;
};
