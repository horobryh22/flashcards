import React from 'react';

import { Box, FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import { ReturnComponentType } from 'types';

export type CustomSelectType = {
    values: number[];
    statePageCount: number;
    setPageCount: (pageCount: string) => void;
};

export const CustomSelect = ({
    statePageCount,
    setPageCount,
    values,
}: CustomSelectType): ReturnComponentType => {
    const [searchParams, setSearchParams] = useSearchParams();

    const pageCount = searchParams.get('pageCount') || String(statePageCount);

    const handleChange = (event: SelectChangeEvent): void => {
        const { value } = event.target;

        setPageCount(value);
        searchParams.set('pageCount', value);
        setSearchParams(searchParams);
    };

    const mappedValues = values.map(value => {
        return (
            <MenuItem key={`${value + 1}`} value={value}>
                {String(value)}
            </MenuItem>
        );
    });

    return (
        <Box sx={{ minWidth: 30 }}>
            <FormControl size="small" variant="outlined">
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={pageCount}
                    onChange={handleChange}
                >
                    {mappedValues}
                </Select>
            </FormControl>
        </Box>
    );
};
