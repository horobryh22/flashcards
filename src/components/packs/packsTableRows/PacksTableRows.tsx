import React, { MouseEvent } from 'react';

import { TableBody, TableCell, TableRow } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';

import classes from './PacksTableRows.module.css';
import { PacksTableRowsType } from './types';

import { ActionImages, PackCoverIntoTable } from 'components/index';
import { PACK_COLUMNS } from 'constant';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setAppInfoAC, setCardsPackIdAC, setIsPacksFetched } from 'store/actions';
import { selectAuthUserId } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const PacksTableRows = ({ rows }: PacksTableRowsType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const authUserId = useTypedSelector(selectAuthUserId);

    const mappedRows = rows.map(row => {
        const handleClick = (): void => {
            if (row.cardsCount) {
                dispatch(setCardsPackIdAC(row._id));
                dispatch(setIsPacksFetched(false));
                navigate(`/cards?cardsPack_id=${row._id}`);

                return;
            }

            if (authUserId === row.user_id) {
                dispatch(setCardsPackIdAC(row._id));
                dispatch(setIsPacksFetched(false));
                navigate(`/cards?cardsPack_id=${row._id}`);

                return;
            }

            if (authUserId !== row.user_id) {
                dispatch(setAppInfoAC('This pack is empty'));
            }
        };

        const stopPropagation = (e: MouseEvent): void => {
            e.preventDefault();
            e.stopPropagation();
        };

        const mappedColumns = PACK_COLUMNS.map(column => {
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
                    {column.id !== 'actions' && column.id !== 'name' && (
                        <div className={classes.nameWrapper}>{value}</div>
                    )}
                    {column.id === 'name' && (
                        <div className={classes.nameContainer}>
                            {row.deckCover && (
                                <PackCoverIntoTable deckCover={row.deckCover} />
                            )}
                            <div className={classes.nameWrapper}>{value}</div>
                        </div>
                    )}
                    {column.id === 'actions' && (
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
        });

        return (
            <TableRow
                hover
                role="checkbox"
                tabIndex={-1}
                key={row._id}
                onClick={handleClick}
                style={{ cursor: 'pointer' }}
            >
                {mappedColumns}
            </TableRow>
        );
    });

    return <TableBody>{mappedRows}</TableBody>;
};
