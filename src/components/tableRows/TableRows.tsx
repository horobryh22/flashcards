import React from 'react';

import { TableBody, TableCell, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { TableRowsType } from './types';

import { CardType } from 'api/types';
import { ActionImages } from 'components';
import { PACK_COLUMNS } from 'constant';
import { ReturnComponentType } from 'types';

export const TableRows = ({ rows }: TableRowsType): ReturnComponentType => {
    const navigate = useNavigate();

    const handleClick = (
        event: React.MouseEvent<HTMLElement, MouseEvent>,
        row: CardType,
    ): void => {
        event.stopPropagation();
        if (event.currentTarget.tagName === 'TR') {
            const cardsPackId = row._id;

            navigate(`${cardsPackId}`);
        }
    };
    const mappedRows = rows.map(row => {
        return (
            <TableRow
                hover
                role="checkbox"
                tabIndex={-1}
                key={row._id}
                onClick={e => handleClick(e, row)}
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
                                value
                            ) : (
                                <ActionImages
                                    currentUserId={row.user_id}
                                    packTitle={row.name}
                                    packId={row._id}
                                    packPrivate={row.private}
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
