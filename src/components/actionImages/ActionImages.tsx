import React from 'react';

import { NavLink } from 'react-router-dom';

import classes from './ActionImages.module.css';
import { ActionImagesType } from './types';

import edit from 'assets/images/edit.svg';
import knowledge from 'assets/images/knowledge.svg';
import remove from 'assets/images/remove.svg';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setSelectedCardPackAC } from 'store/actions/packs';
import { removeCardsPack, updateCardsPack } from 'store/middlewares';
import { selectAuthUserId } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const ActionImages = ({ card }: ActionImagesType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const authUserId = useTypedSelector(selectAuthUserId);

    const removePack = (e: React.MouseEvent<HTMLElement>): void => {
        e.stopPropagation();
        dispatch(removeCardsPack(card._id));
    };

    const updatePack = (e: React.MouseEvent<HTMLElement>): void => {
        e.stopPropagation();
        dispatch(updateCardsPack(card._id, 'Updated Title'));
    };

    const learnPack = (e: React.MouseEvent<HTMLElement>): void => {
        e.stopPropagation();
        dispatch(setSelectedCardPackAC(card));
    };

    const linkClass = authUserId !== card.user_id ? classes.disabledIcon : '';

    return (
        <div style={{ width: '70px', display: 'flex', justifyContent: 'space-between' }}>
            <NavLink to="" onClick={removePack} className={linkClass}>
                <img src={remove} alt="remove" />
            </NavLink>
            <NavLink to="" onClick={updatePack} className={linkClass}>
                <img src={edit} alt="edit" />
            </NavLink>
            <NavLink to={`/learn/${card._id}`} onClick={learnPack}>
                <img src={knowledge} alt="knowledge" />
            </NavLink>
        </div>
    );
};
