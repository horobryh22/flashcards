import React from 'react';

import { TableBody, TableCell, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import classes from './TableRows.module.css';
import { TableRowsType } from './types';

import { ActionImages } from 'components';
import { PACK_COLUMNS } from 'constant';
import { useAppDispatch } from 'hooks';
import { setCardsPackNameAC } from 'store/actions';
import { ReturnComponentType } from 'types';

export const TableRows = ({ rows }: TableRowsType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const mappedRows = rows.map(row => {
        const handleClick = (): void => {
            dispatch(setCardsPackNameAC(row.name));
            navigate(`/packs/${row._id}`);
        };

        return (
            <TableRow
                hover
                role="checkbox"
                tabIndex={-1}
                key={row._id}
                onClick={handleClick}
            >
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
                                <div className={classes.nameWrapper}>{value}</div>
                            ) : (
                                <div className={classes.actionsWrapper}>
                                    <ActionImages card={row} />
                                </div>
                            )}
                        </TableCell>
                    );
                })}
            </TableRow>
        );
    });

    return <TableBody>{mappedRows}</TableBody>;
};
