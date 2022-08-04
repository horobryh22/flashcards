import React from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import { useAppDispatch, useTypedSelector } from 'hooks';
import { sliderAC } from 'store/actions/slider';
import { ReturnComponentType } from 'types';

export const NumberOfCards = (): ReturnComponentType => {
    const dispatch = useAppDispatch();
    const min = useTypedSelector(state => state.packs.searchParams.min);
    const max = useTypedSelector(state => state.packs.searchParams.max);
    // const [value, setValue] = React.useState<number[]>([0, 100]);

    // console.log(min, max);

    const handleChange = (event: Event, newValue: number | number[]): void => {
        if (Array.isArray(newValue)) {
            dispatch(sliderAC(newValue[0], newValue[1]));
        }
    };

    /*    useEffect(() => {
        dispatch(sliderAC(value[0], value[1]));
    }, [value[0], value[1]]); */

    return (
        <Box sx={{ width: 300 }}>
            <Slider
                min={0}
                max={10}
                value={[min, max]}
                onChange={handleChange}
                valueLabelDisplay="auto"
            />
        </Box>
    );
};
