import React, { MouseEvent } from 'react';

import { TableBody, TableCell, TableRow } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';

import classes from './PacksTableRows.module.css';
import { PacksTableRowsType } from './types';

import { ActionImages } from 'components';
import { PACK_COLUMNS } from 'constant';
import { useAppDispatch } from 'hooks';
import { setCardsPackIdAC, setIsPacksFetched } from 'store/actions';
import { ReturnComponentType } from 'types';

export const PacksTableRows = ({ rows }: PacksTableRowsType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const mappedRows = rows.map(row => {
        const handleClick = (): void => {
            dispatch(setCardsPackIdAC(row._id));
            dispatch(setIsPacksFetched(false));
            navigate(`/cards?cardsPack_id=${row._id}`);
        };

        const stopPropagation = (e: MouseEvent): void => {
            e.preventDefault();
            e.stopPropagation();
        };

        return (
            <TableRow
                hover
                role="checkbox"
                tabIndex={-1}
                key={row._id}
                onClick={handleClick}
                style={{ cursor: 'pointer' }}
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
                                <NavLink
                                    to=""
                                    className={classes.actionsWrapper}
                                    onClick={stopPropagation}
                                >
                                    <ActionImages card={row} />
                                </NavLink>
                            )}
                        </TableCell>
                    );
                })}
            </TableRow>
        );
    });

    return <TableBody>{mappedRows}</TableBody>;
};
