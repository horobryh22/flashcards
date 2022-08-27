import React from 'react';

import { Rating } from '@mui/material';
import { NavLink } from 'react-router-dom';

import classes from './RatingStars.module.css';

import { CardType } from 'api/types';
import edit from 'assets/images/edit.svg';
import remove from 'assets/images/remove.svg';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setModalTypeAC } from 'store/actions';
import { selectAuthUserId } from 'store/selectors';
import { ReturnComponentType } from 'types';

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
                cardTitle: card.question,
                isOpen: true,
                type: 'removeCard',
                modalTitle: 'Delete Card',
                buttonName: 'Delete',
            }),
        );
    };

    return (
        <div className={classes.wrapper}>
            <Rating name="read-only" value={card.grade} readOnly />
            {authUserId === card.user_id ? (
                <div className={classes.actionImages}>
                    <NavLink to="" onClick={() => {}}>
                        <img src={edit} alt="edit" />
                    </NavLink>
                    <NavLink to="" onClick={removeCard}>
                        <img src={remove} alt="remove" />
                    </NavLink>
                </div>
            ) : null}
        </div>
    );
};
