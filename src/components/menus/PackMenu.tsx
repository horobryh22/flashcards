import React from 'react';

import { ListItemIcon, MenuItem } from '@mui/material';

import edit from 'assets/images/edit.svg';
import knowledge from 'assets/images/knowledge.svg';
import remove from 'assets/images/remove.svg';
import { ParentMenu } from 'components';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setModalTypeAC } from 'store/actions';
import { MenuType, ReturnComponentType } from 'types';

export const PackMenu = ({
    element,
    setElement,
    open,
}: MenuType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const packTitle = useTypedSelector(state => state.cards.packName);
    const packPrivate = useTypedSelector(state => state.cards.packPrivate);
    const packId = useTypedSelector(state => state.cards.searchParams.cardsPack_id);

    const handleEditClick = (): void => {
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

    const handleDeleteClick = (): void => {
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

    return (
        <ParentMenu element={element} open={open} setElement={setElement}>
            <MenuItem onClick={handleEditClick}>
                <ListItemIcon>
                    <img src={edit} alt="edit" />
                </ListItemIcon>
                Edit
            </MenuItem>
            <MenuItem onClick={handleDeleteClick}>
                <ListItemIcon>
                    <img src={remove} alt="remove" />
                </ListItemIcon>
                Delete
            </MenuItem>
            <MenuItem onClick={() => {}}>
                <ListItemIcon>
                    <img src={knowledge} alt="knowledge" />
                </ListItemIcon>
                Learn
            </MenuItem>
        </ParentMenu>
    );
};
