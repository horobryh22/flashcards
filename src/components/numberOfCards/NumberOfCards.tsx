import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import classes from './NumberOfCards.module.css';

import { NumEditableSpan } from 'components';
import { MAX_CARDS_COUNT } from 'constant';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setCardsRangeAC } from 'store/actions';
import { selectMax, selectMin } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const NumberOfCards = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const min = useTypedSelector(selectMin);
    const max = useTypedSelector(selectMax);

    const [value, setValue] = useState([min, max]);

    const handleChange = (event: Event, newValue: number | Array<number>): void => {
        if (Array.isArray(newValue)) {
            setValue(newValue);
        }
    };

    const setCardsRange = (): void => {
        dispatch(setCardsRangeAC(value[0], value[1]));
    };

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
