import React from 'react';

import { NavLink } from 'react-router-dom';

import classes from './ActionImages.module.css';
import { ActionImagesType } from './types';

import edit from 'assets/images/edit.svg';
import knowledge from 'assets/images/knowledge.svg';
import remove from 'assets/images/remove.svg';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setModalTypeAC } from 'store/actions';
import { selectAuthUserId } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const ActionImages = ({
    packId,
    packTitle,
    currentUserId,
    packPrivate,
}: ActionImagesType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const authUserId = useTypedSelector(selectAuthUserId);

    const removePack = (e: React.MouseEvent<HTMLElement>): void => {
        e.stopPropagation();
        dispatch(
            setModalTypeAC({
                packId,
                packTitle,
                isOpen: true,
                type: 'removePack',
                modalTitle: 'Delete pack',
                buttonName: 'Delete',
            }),
        );
    };

    const updatePack = (e: React.MouseEvent<HTMLElement>): void => {
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

    const linkClass = authUserId !== currentUserId ? classes.disabledIcon : '';

    return (
        <div style={{ width: '70px', display: 'flex', justifyContent: 'space-between' }}>
            <NavLink to="" onClick={removePack} className={linkClass}>
                <img src={remove} alt="remove" />
            </NavLink>
            <NavLink to="" onClick={updatePack} className={linkClass}>
                <img src={edit} alt="edit" />
            </NavLink>
            <NavLink to="">
                <img src={knowledge} alt="knowledge" />
            </NavLink>
        </div>
    );
};
