import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useSearchParams } from 'react-router-dom';

import classes from './NumberOfCards.module.css';

import { NumEditableSpan } from 'components';
import { MAX_CARDS_COUNT } from 'constant';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setCardsRangeAC } from 'store/actions';
import { selectMax, selectMin } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const NumberOfCards = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    const stateMin = useTypedSelector(selectMin);
    const stateMax = useTypedSelector(selectMax);

    const min = Number(searchParams.get('min')) || stateMin;
    const max = Number(searchParams.get('max')) || stateMax;

    const [value, setValue] = useState([min, max]);

    const handleChange = (event: Event, newValue: number | Array<number>): void => {
        if (Array.isArray(newValue)) {
            setValue(newValue);
        }
    };

    const setCardsRange = (): void => {
        dispatch(setCardsRangeAC(value[0], value[1]));
        searchParams.set('min', `${value[0]}`);
        searchParams.set('max', `${value[1]}`);
        setSearchParams(searchParams);
    };

    useEffect(() => {
        setValue([min, max]);
    }, [min, max]);

    return (
        <Box>
            <span className={classes.title}>Number of cards</span>
            <div className={classes.slider}>
                <NumEditableSpan num={min} isMin />
                <Slider
                    getAriaLabel={() => 'Minimum distance'}
                    min={0}
                    max={MAX_CARDS_COUNT}
                    value={value}
                    onChange={handleChange}
                    onChangeCommitted={setCardsRange}
                    valueLabelDisplay="auto"
                    style={{ width: '150px' }}
                />
                <NumEditableSpan num={max} isMin={false} />
            </div>
        </Box>
    );
};
