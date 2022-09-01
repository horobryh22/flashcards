import React from 'react';

import { Button } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import { useAppDispatch, useTypedSelector } from 'hooks';
import { setSearchUserIdAC } from 'store/actions';
import { selectAuthUserId, selectId } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const ShowPacksCards = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    const userId = useTypedSelector(selectId);
    const paramId = searchParams.get('user_id') || userId;

    const authUserId = useTypedSelector(selectAuthUserId);

    const handleClickAll = (): void => {
        searchParams.set('user_id', '');
        dispatch(setSearchUserIdAC(''));
        setSearchParams(searchParams);
    };

    const handleClickMy = (): void => {
        searchParams.set('user_id', authUserId);
        dispatch(setSearchUserIdAC(authUserId));
        setSearchParams(searchParams);
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
                variant={paramId === authUserId ? 'outlined' : 'contained'}
                style={{ textTransform: 'none' }}
                onClick={handleClickAll}
            >
                All
            </Button>
            <Button
                variant={paramId === authUserId ? 'contained' : 'outlined'}
                style={{ textTransform: 'none' }}
                onClick={handleClickMy}
            >
                My
            </Button>
        </div>
    );
};
