import React, { ChangeEvent, useEffect, useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import classes from './Search.module.css';
import { SearchType } from './types';

import { DELAY } from 'constant';
import { useAppDispatch, useDebounce } from 'hooks';
import { setPackNameAC } from 'store/actions';
import { ReturnComponentType } from 'types';

export const Search = ({
    defaultValue,
    uriParam,
    fullWidth,
    isDataFetched,
    style,
}: SearchType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    const [value, setValue] = useState<string>(
        searchParams.get(uriParam) || defaultValue,
    );
    const debouncedValue = useDebounce<string>(value, DELAY);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value);
    };

    useEffect(() => {
        if (!isDataFetched) {
            return;
        }

        dispatch(setPackNameAC(debouncedValue));
        searchParams.set(uriParam, debouncedValue);

        setSearchParams(searchParams);
    }, [debouncedValue]);

    return (
        <div className={classes.wrapper}>
            <span className={classes.title}>Search</span>
            <TextField
                fullWidth={fullWidth}
                size="small"
                id="input-with-icon-textfield"
                placeholder="Provide your text"
                onChange={handleChange}
                value={value}
                style={{ height: '36px', ...style }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
            />
        </div>
    );
};
