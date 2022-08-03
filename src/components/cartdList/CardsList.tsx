import React, { useState } from 'react';

import { ArrowDropDown } from '@mui/icons-material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
} from '@mui/material';

import s from './CardList.module.css';

import { CardsListPropsType } from 'components/cartdList/types';
import { OrderDirectionType } from 'components/mainTableRow/types';
import { useAppDispatch } from 'hooks';
import { setCardsSearchParamsAC } from 'store/actions/cards';
import { fetchCards } from 'store/middlewares';
import { ReturnComponentType } from 'types';

const UPDATE_SORT_BTN_ID = 'updateSortBtn';
const UPDATE_FIELD_NAME = 'updated';
const GRADE_SORT_BTN_ID = 'gradeSortBtn';
const GRADE_FIELD_NAME = 'grade';

export const CardsList = ({
    cards,
    cardsPack_id,
}: CardsListPropsType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [updateDirection, setUpdateDirection] = useState<OrderDirectionType>('asc');
    const [gradeDirection, setGradeDirection] = useState<OrderDirectionType>('asc');

    const handleSort = (e: React.MouseEvent<HTMLElement>): void => {
        let sortCards;

        if (e.currentTarget.id === UPDATE_SORT_BTN_ID) {
            sortCards =
                updateDirection === 'asc'
                    ? `1${UPDATE_FIELD_NAME}`
                    : `0${UPDATE_FIELD_NAME}`;
            setUpdateDirection(updateDirection === 'asc' ? 'desc' : 'asc');
        }
        if (e.currentTarget.id === GRADE_SORT_BTN_ID) {
            sortCards =
                gradeDirection === 'asc'
                    ? `1${GRADE_FIELD_NAME}`
                    : `0${GRADE_FIELD_NAME}`;
            setGradeDirection(gradeDirection === 'asc' ? 'desc' : 'asc');
        }

        dispatch(setCardsSearchParamsAC({ cardsPack_id, sortCards }));
        dispatch(fetchCards({ cardsPack_id, sortCards }));
    };

    const editCardHandler = (): void => {
        console.log('edit card');
    };

    const deleteCardHandler = (): void => {
        console.log('delete card');
    };

    if (cards.length === 0) {
        return <h3>Oops, cards not added yet</h3>;
    }

    return (
        <Paper sx={{ width: '100%' }} style={{ marginTop: '25px' }}>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={s.tableHead}>Question</TableCell>
                            <TableCell className={s.tableHead}>Answer</TableCell>
                            <TableCell
                                className={`${s.tableHead} ${s.pointer}`}
                                onClick={handleSort}
                                id={UPDATE_SORT_BTN_ID}
                            >
                                Last Updated(g)
                                <TableSortLabel
                                    active
                                    IconComponent={ArrowDropDown}
                                    direction={updateDirection}
                                />
                            </TableCell>
                            <TableCell
                                className={`${s.tableHead} ${s.pointer}`}
                                onClick={handleSort}
                                id={GRADE_SORT_BTN_ID}
                            >
                                Grade(g)
                                <TableSortLabel
                                    active
                                    IconComponent={ArrowDropDown}
                                    direction={gradeDirection}
                                />
                            </TableCell>
                            <TableCell className={`${s.tableHead}`} />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cards.map(card => (
                            <TableRow
                                key={card._id}
                                sx={{
                                    '&:last-child td, &:last-child th': { border: 0 },
                                }}
                                hover
                            >
                                <TableCell component="th" scope="row">
                                    {card.question}
                                </TableCell>
                                <TableCell>{card.answer}</TableCell>
                                <TableCell>{card.updated}</TableCell>
                                <TableCell>{card.grade}</TableCell>
                                <TableCell className={s.controls}>
                                    <ModeEditOutlineOutlinedIcon
                                        className={`${s.editBtn} ${s.btn}`}
                                        onClick={editCardHandler}
                                    />
                                    <DeleteOutlineOutlinedIcon
                                        className={`${s.deleteBtn} ${s.btn}`}
                                        onClick={deleteCardHandler}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};
