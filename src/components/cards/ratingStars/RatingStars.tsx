import React from 'react';

import { IconButton, Rating } from '@mui/material';

import classes from './RatingStars.module.css';

import { CardType } from 'api/types';
import edit from 'assets/images/edit.svg';
import remove from 'assets/images/remove.svg';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setModalTypeAC } from 'store/actions';
import { selectAuthUserId } from 'store/selectors';
import { ReturnComponentType } from 'types';
import { isBase64 } from 'utils';

export type RatingStarsType = {
    card: CardType;
};

export const RatingStars = ({ card }: RatingStarsType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const authUserId = useTypedSelector(selectAuthUserId);

    const removeCard = (e: React.MouseEvent<HTMLElement>): void => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(
            setModalTypeAC({
                cardId: card._id,
                cardQuestion: card.question,
                isOpen: true,
                type: 'removeCard',
                modalTitle: 'Delete Card',
                buttonName: 'Delete',
            }),
        );
    };

    const editCard = (e: React.MouseEvent<HTMLElement>): void => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(
            setModalTypeAC({
                questionImg: card.questionImg,
                answerImg: card.answerImg,
                questionFormat:
                    isBase64(card.questionImg) && isBase64(card.answerImg)
                        ? 'image'
                        : 'text',
                cardId: card._id,
                cardQuestion: card.question,
                cardAnswer: card.answer,
                isOpen: true,
                type: 'editCard',
                modalTitle: 'Edit card',
                buttonName: 'Save',
            }),
        );
    };

    return (
        <div className={classes.wrapper}>
            <Rating name="read-only" value={card.grade} precision={0.5} readOnly />
            {authUserId === card.user_id ? (
                <div className={classes.actionImages}>
                    <IconButton size="small" onClick={editCard}>
                        <img src={edit} alt="edit" />
                    </IconButton>
                    <IconButton size="small" onClick={removeCard}>
                        <img src={remove} alt="remove" />
                    </IconButton>
                </div>
            ) : null}
        </div>
    );
};
