import React from 'react';

import { NavLink } from 'react-router-dom';

import classes from './ActionImages.module.css';
import { ActionImagesType } from './types';

import edit from 'assets/images/edit.svg';
import knowledge from 'assets/images/knowledge.svg';
import remove from 'assets/images/remove.svg';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setCardsPackNameAC, setModalTypeAC } from 'store/actions';
import { selectAuthUserId } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const ActionImages = ({ card }: ActionImagesType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const { name: packTitle, _id: packId, private: packPrivate } = card;

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

    const learnPack = (): void => {
        dispatch(setCardsPackNameAC(card.name));
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
            <NavLink to="/learn" onClick={learnPack}>
                <img src={knowledge} alt="knowledge" />
            </NavLink>
        </div>
    );
};
