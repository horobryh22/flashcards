import React, { ChangeEvent, useEffect, useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';

import classes from './Search.module.css';

import { DELAY } from 'constant';
import { useAppDispatch, useDebounce } from 'hooks';
import { setPackNameAC } from 'store/actions';
import { ReturnComponentType } from 'types';

export const Search = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [value, setValue] = useState<string>('');
    const debouncedValue = useDebounce<string>(value, DELAY);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value);
    };

    useEffect(() => {
        dispatch(setPackNameAC(debouncedValue));
    }, [debouncedValue]);

    return (
        <div className={classes.wrapper}>
            <span className={classes.title}>Search</span>
            <TextField
                size="small"
                sx={{ width: '460px' }}
                id="input-with-icon-textfield"
                placeholder="Provide your text"
                onChange={handleChange}
                style={{ height: '36px' }}
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
