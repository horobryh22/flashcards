import React, { useState } from 'react';

import { Button } from '@mui/material';

import { useAppDispatch, useTypedSelector } from 'hooks';
import { setSearchUserIdAC } from 'store/actions';
import { selectAuthUserId } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const ShowPacksCards = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [active, setActive] = useState<'All' | 'My'>('All');

    const authUserId = useTypedSelector(selectAuthUserId);

    const handleClickAll = (): void => {
        dispatch(setSearchUserIdAC(''));
        setActive('All');
    };

    const handleClickMy = (): void => {
        dispatch(setSearchUserIdAC(authUserId));
        setActive('My');
    };

    return (
        <div>
            <span
                style={{
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '17px',
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '8px',
                }}
            >
                Show packs cards
            </span>
            <Button
                variant={active === 'All' ? 'contained' : 'outlined'}
                style={{ textTransform: 'none' }}
                onClick={handleClickAll}
            >
                All
            </Button>

            <Button
                variant={active === 'My' ? 'contained' : 'outlined'}
                style={{ textTransform: 'none' }}
                onClick={handleClickMy}
            >
                My
            </Button>
        </div>
    );
};
