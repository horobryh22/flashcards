import React from 'react';

import { Box, FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';

import { useAppDispatch, useTypedSelector } from 'hooks';
import { setPageCountAC } from 'store/actions';
import { selectPageCount } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const CustomSelect = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const pageCount = useTypedSelector(selectPageCount).toString();

    const handleChange = (event: SelectChangeEvent): void => {
        dispatch(setPageCountAC(Number(event.target.value)));
    };

    return (
        <Box sx={{ minWidth: 30 }}>
            <FormControl size="small" variant="outlined">
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={pageCount}
                    onChange={handleChange}
                >
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={16}>16</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};
