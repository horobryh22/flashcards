import React from 'react';

import { NavLink, useNavigate } from 'react-router-dom';

import classes from './ActionImages.module.css';
import { ActionImagesType } from './types';

import edit from 'assets/images/edit.svg';
import knowledge from 'assets/images/knowledge.svg';
import remove from 'assets/images/remove.svg';
import { useAppDispatch, useTypedSelector } from 'hooks';
import {
    setCardCurrentPageAC,
    setCardPageCountAC,
    setCardsPackIdAC,
    setModalTypeAC,
} from 'store/actions';
import { fetchCards } from 'store/middlewares';
import { selectAuthUserId } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const ActionImages = ({ card }: ActionImagesType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const { name: packTitle, _id: packId, private: packPrivate, cardsCount } = card;

    const authUserId = useTypedSelector(selectAuthUserId);

    const removePack = (e: React.MouseEvent<HTMLElement>): void => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(
            setModalTypeAC({
                packId,
                packTitle,
                isOpen: true,
                type: 'removePack',
                modalTitle: 'Delete Pack',
                buttonName: 'Delete',
            }),
        );
    };

    const updatePack = (e: React.MouseEvent<HTMLElement>): void => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(
            setModalTypeAC({
                packPrivate,
                packId,
                packTitle,
                isOpen: true,
                type: 'editPack',
                modalTitle: 'Edit pack',
                buttonName: 'Save',
            }),
        );
    };

    const learnPack = async (e: React.MouseEvent<HTMLElement>): Promise<void> => {
        e.preventDefault();
        e.stopPropagation();
        await dispatch(setCardsPackIdAC(packId));
        await dispatch(setCardPageCountAC(cardsCount));
        await dispatch(setCardCurrentPageAC(1));
        await dispatch(fetchCards());
        navigate('/learn');
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
            <NavLink
                to=""
                onClick={learnPack}
                className={cardsCount ? '' : classes.disabledIcon}
            >
                <img src={knowledge} alt="knowledge" />
            </NavLink>
        </div>
    );
};
