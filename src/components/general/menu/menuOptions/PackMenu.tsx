import React from 'react';

import { ListItemIcon, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import edit from 'assets/images/edit.svg';
import knowledge from 'assets/images/knowledge.svg';
import remove from 'assets/images/remove.svg';
import { ParentMenu } from 'components';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setCardCurrentPageAC, setCardPageCountAC, setModalTypeAC } from 'store/actions';
import {
    selectCardsPackId,
    selectCardsPackName,
    selectCardsPackPrivate,
    selectCardsTotalCount,
} from 'store/selectors';
import { MenuType, ReturnComponentType } from 'types';

export const PackMenu = ({
    element,
    setElement,
    open,
}: MenuType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const packTitle = useTypedSelector(selectCardsPackName);
    const packPrivate = useTypedSelector(selectCardsPackPrivate);
    const packId = useTypedSelector(selectCardsPackId);
    const cardsTotalCount = useTypedSelector(selectCardsTotalCount);

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

    const handleLearnClick = async (): Promise<void> => {
        await dispatch(setCardPageCountAC(cardsTotalCount));
        await dispatch(setCardCurrentPageAC(1));
        navigate('/learn');
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
            <MenuItem onClick={handleLearnClick} disabled={!cardsTotalCount}>
                <ListItemIcon>
                    <img src={knowledge} alt="knowledge" />
                </ListItemIcon>
                Learn
            </MenuItem>
        </ParentMenu>
    );
};
