import React from 'react';

import { Box, FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import { DEFAULT_PAGE_COUNT } from 'constant';
import { useAppDispatch } from 'hooks';
import { setPageCountAC } from 'store/actions';
import { ReturnComponentType } from 'types';

export const CustomSelect = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    const pageCount = searchParams.get('pageCount') || String(DEFAULT_PAGE_COUNT);

    const handleChange = (event: SelectChangeEvent): void => {
        const { value } = event.target;

        dispatch(setPageCountAC(Number(value)));
        searchParams.set('pageCount', value);
        setSearchParams(searchParams);
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
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};
