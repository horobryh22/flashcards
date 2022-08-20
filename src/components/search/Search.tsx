import React, { ChangeEvent, useEffect, useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import classes from './Search.module.css';

import { DELAY } from 'constant';
import { useAppDispatch, useDebounce, useTypedSelector } from 'hooks';
import { setPackNameAC } from 'store/actions';
import { selectIsPacksFetched } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const Search = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    const isPacksFetched = useTypedSelector(selectIsPacksFetched);

    const [value, setValue] = useState<string>(searchParams.get('packName') || '');
    const debouncedValue = useDebounce<string>(value, DELAY);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value);
    };

    useEffect(() => {
        if (!isPacksFetched) {
            return;
        }

        dispatch(setPackNameAC(debouncedValue));
        searchParams.set('packName', debouncedValue);

        setSearchParams(searchParams);
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
                value={value}
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
