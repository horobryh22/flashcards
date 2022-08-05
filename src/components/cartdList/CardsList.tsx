import React, { useState } from 'react';

import { ArrowDropDown } from '@mui/icons-material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import {
    Paper,
    Rating,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
} from '@mui/material';

import s from './CardList.module.css';

import { SearchParamsCardsType } from 'api/types';
import { CardsType } from 'api/types/cards/GetCardType/GetCardsType';
import { CardsListPropsType } from 'components/cartdList/types';
import { OrderDirectionType } from 'components/mainTableRow/types';
import { useAppDispatch } from 'hooks';
import { setCardsSearchParamsAC } from 'store/actions/cards';
import { fetchCards } from 'store/middlewares';
import { deleteCard } from 'store/middlewares/cards/deleteCard';
import { updateCard } from 'store/middlewares/cards/updateCard';
import { ReturnComponentType } from 'types';

const UPDATE_SORT_BTN_ID = 'updateSortBtn';
const UPDATE_FIELD_NAME = 'updated';
const GRADE_SORT_BTN_ID = 'gradeSortBtn';
const GRADE_FIELD_NAME = 'grade';

export const CardsList = ({
    cards,
    cardsPack_id,
    disabled,
}: CardsListPropsType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [updateDirection, setUpdateDirection] = useState<OrderDirectionType>('asc');
    const [gradeDirection, setGradeDirection] = useState<OrderDirectionType>('asc');

    const disableClass = disabled ? s.disabledIcon : '';

    const handleSort = (e: React.MouseEvent<HTMLElement>): void => {
        let sortCards: string;

        if (e.currentTarget.id === UPDATE_SORT_BTN_ID) {
            sortCards =
                updateDirection === 'asc'
                    ? `1${UPDATE_FIELD_NAME}`
                    : `0${UPDATE_FIELD_NAME}`;
            setUpdateDirection(updateDirection === 'asc' ? 'desc' : 'asc');
            dispatch(
                setCardsSearchParamsAC({
                    cardsPack_id,
                    sortCards,
                } as SearchParamsCardsType),
            );
        }
        if (e.currentTarget.id === GRADE_SORT_BTN_ID) {
            sortCards =
                gradeDirection === 'asc'
                    ? `1${GRADE_FIELD_NAME}`
                    : `0${GRADE_FIELD_NAME}`;
            setGradeDirection(gradeDirection === 'asc' ? 'desc' : 'asc');
            dispatch(
                setCardsSearchParamsAC({
                    cardsPack_id,
                    sortCards,
                } as SearchParamsCardsType),
            );
        }

        if (cardsPack_id) {
            dispatch(fetchCards(cardsPack_id));
        }
    };

    const editCardHandler = (card: CardsType): void => {
        // hardcode //
        const updatedCard = { ...card };

        updatedCard.question = 'updated question';
        updatedCard.answer = 'updated answer';
        // hardcode //

        dispatch(updateCard(updatedCard));
    };

    const deleteCardHandler = (cardId: string): void => {
        dispatch(deleteCard(cardId));
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
                        {cards.map(card => {
                            const { grade } = card;

                            return (
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
                                    <TableCell>
                                        <Rating
                                            value={grade}
                                            name="rating"
                                            precision={0.1}
                                            size="small"
                                            readOnly
                                        />
                                    </TableCell>
                                    <TableCell className={s.controls}>
                                        <ModeEditOutlineOutlinedIcon
                                            className={`${s.editBtn} ${s.btn} ${disableClass}`}
                                            onClick={() => editCardHandler(card)}
                                        />
                                        <DeleteOutlineOutlinedIcon
                                            className={`${s.deleteBtn} ${s.btn} ${disableClass}`}
                                            onClick={() => deleteCardHandler(card._id)}
                                        />
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};
