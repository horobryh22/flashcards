import React, { ChangeEvent, useState } from 'react';

import classes from './NumEditableSpan.module.css';
import { EditableSpanType } from './types';

import { MAX_CARDS_COUNT } from 'constant';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setCardsRangeAC } from 'store/actions';
import { selectMax, selectMin } from 'store/selectors';
import { ReturnComponentType } from 'types';

const VALUE_LENGTH = 3;

export const NumEditableSpan = ({
    num,
    isMin,
}: EditableSpanType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const min = useTypedSelector(selectMin);
    const max = useTypedSelector(selectMax);

    const [mode, setMode] = useState(false);
    const [value, setValue] = useState(num);

    const handleDoubleClick = (): void => {
        setMode(!mode);
    };

    const handleBlur = (): void => {
        setMode(!mode);
        if (isMin) {
            dispatch(setCardsRangeAC(value, max));
        }

        if (!isMin) {
            dispatch(setCardsRangeAC(min, value));
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.currentTarget;

        if (value.length <= VALUE_LENGTH && Number(value) <= MAX_CARDS_COUNT) {
            setValue(Number(value));
        }
    };

    return (
        <div className={classes.numBox} onDoubleClick={handleDoubleClick}>
            {mode ? (
                <input
                    value={value}
                    className={classes.input}
                    autoFocus
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
            ) : (
                <span>{num}</span>
            )}
        </div>
    );
};
