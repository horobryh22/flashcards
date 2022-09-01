import React, { ChangeEvent, useEffect, useState } from 'react';

import { TextField } from '@mui/material';

import edit from 'assets/images/edit.svg';
import classes from 'components/common/editableSpan/EditableSpan.module.css';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { updateUserData } from 'store/middlewares';
import { selectUserName } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const EditableSpan = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const userName = useTypedSelector(selectUserName);

    const [editMode, setEditMode] = useState(false);
    const [value, setValue] = useState(userName);

    const changeMode = (): void => {
        setEditMode(true);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setValue(e.currentTarget.value);
    };

    const updateUserName = (): void => {
        dispatch(updateUserData({ name: value }));
        setEditMode(false);
    };

    useEffect(() => {
        setValue(userName);
    }, [userName]);

    return (
        <div className={classes.wrapper}>
            {editMode ? (
                <TextField
                    autoFocus
                    fullWidth
                    label="Nickname"
                    variant="standard"
                    value={value}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                            <button
                                type="button"
                                className={classes.button}
                                onClick={updateUserName}
                            >
                                SAVE
                            </button>
                        ),
                    }}
                />
            ) : (
                <>
                    <span className={classes.title}>{userName}</span>
                    <button type="button" className={classes.image} onClick={changeMode}>
                        <img src={edit} alt="edit" />
                    </button>
                </>
            )}
        </div>
    );
};
