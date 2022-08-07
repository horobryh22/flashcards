import React, { ChangeEvent, useEffect, useState } from 'react';

import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';

import classes from './EditableSpan.module.css';

import { ReturnComponentType } from 'types';

type EditableSpanProps = {
    title: string;
    editTitle: (data: any) => void;
};
export const EditableSpan = (props: EditableSpanProps): ReturnComponentType => {
    const { title, editTitle } = props;
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState(title);

    const onPencilClickHandler = (): void => {
        setEdit(!edit);
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        setName(e.currentTarget.value);
    };

    /*    const onKeyPressHandler = () =>{
            setError(null);
            if(e.key ==="Enter"){
                addTask()
            }
        } */

    const saveBtnHandler = (): void => {
        editTitle(name);
        onPencilClickHandler();
    };

    useEffect(() => {
        setName(title);
    }, [title]);

    return edit ? (
        <div>
            <div className={classes.nickName}>Nickname</div>
            <input value={name} onChange={onChangeHandler} />
            <Button onClick={saveBtnHandler} variant="contained" size="small">
                Save
            </Button>
        </div>
    ) : (
        <div>
            <span>{title}</span>
            <span>
                <EditIcon onClick={onPencilClickHandler} />
            </span>
        </div>
    );
};
