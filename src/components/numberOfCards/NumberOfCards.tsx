import React from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import classes from './NumberOfCards.module.css';

import { useAppDispatch, useTypedSelector } from 'hooks';
import { setCardsRangeAC } from 'store/actions';
import { ReturnComponentType } from 'types';

export const NumberOfCards = (): ReturnComponentType => {
    const dispatch = useAppDispatch();
    const min = useTypedSelector(state => state.packs.searchParams.min);
    const max = useTypedSelector(state => state.packs.searchParams.max);

    const handleChange = (
        event: React.SyntheticEvent | Event,
        value: number | Array<number>,
    ): void => {
        if (Array.isArray(value)) {
            dispatch(setCardsRangeAC(value[0], value[1]));
        }
    };

    return (
        <Box>
            <span className={classes.title}>Number of cards</span>
            <div className={classes.slider}>
                <div className={classes.numBox}>
                    <span>{min}</span>
                </div>
                <Slider
                    getAriaLabel={() => 'Minimum distance'}
                    min={0}
                    max={110}
                    value={[min, max]}
                    onChangeCommitted={handleChange}
                    disableSwap
                    valueLabelDisplay="auto"
                    style={{ width: '150px' }}
                />
                <div className={classes.numBox}>
                    <span>{max}</span>
                </div>
            </div>
        </Box>
    );
};
