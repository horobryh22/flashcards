import React, { ChangeEvent, useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import classes from './NumEditableSpan.module.css';
import { EditableSpanType } from './types';

import { MAX_CARDS_COUNT } from 'constant';
import { useAppDispatch } from 'hooks';
import { setCardsRangeAC } from 'store/actions';
import { ReturnComponentType } from 'types';

const VALUE_LENGTH = 3;

export const NumEditableSpan = ({
    num,
    isMin,
}: EditableSpanType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    const min = Number(searchParams.get('min')) || 0;
    const max = Number(searchParams.get('max')) || MAX_CARDS_COUNT;

    const [mode, setMode] = useState(false);
    const [value, setValue] = useState(num);

    const handleDoubleClick = (): void => {
        setMode(!mode);
    };

    const handleBlur = (): void => {
        setMode(!mode);
        if (isMin) {
            dispatch(setCardsRangeAC(value, max));
            searchParams.set('min', `${value}`);
        }

        if (!isMin) {
            dispatch(setCardsRangeAC(min, value));
            searchParams.set('max', `${value}`);
        }

        setSearchParams(searchParams);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.currentTarget;

        if (value.length <= VALUE_LENGTH && Number(value) <= MAX_CARDS_COUNT) {
            setValue(Number(value));
        }
    };

    useEffect(() => {
        setValue(num);
    }, [num]);

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
