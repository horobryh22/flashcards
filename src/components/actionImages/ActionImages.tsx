import React from 'react';

import { NavLink } from 'react-router-dom';

import edit from 'assets/images/edit.svg';
import knowledge from 'assets/images/knowledge.svg';
import remove from 'assets/images/remove.svg';
import { useAppDispatch } from 'hooks';
import { removeCardsPack } from 'store/middlewares';
import { ReturnComponentType } from 'types';

export type ActionImagesType = {
    id: string;
};

export const ActionImages = ({ id }: ActionImagesType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const handleClick = (): void => {
        dispatch(removeCardsPack(id));
    };

    return (
        <div style={{ width: '70px', display: 'flex', justifyContent: 'space-between' }}>
            <NavLink to="" onClick={handleClick}>
                <img src={remove} alt="remove" />
            </NavLink>
            <NavLink to="">
                <img src={edit} alt="edit" />
            </NavLink>
            <NavLink to="">
                <img src={knowledge} alt="knowledge" />
            </NavLink>
        </div>
    );
};
