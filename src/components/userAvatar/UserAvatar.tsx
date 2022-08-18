import React, { useEffect, useState } from 'react';

import { Avatar } from '@mui/material';

import defaultAvatar from 'assets/images/defaultAvatar.jpg';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setAuthErrorAC, setIsAvatarBrokenAC } from 'store/actions';
import { selectAvatar } from 'store/selectors';
import { ReturnComponentType } from 'types';

export type UserAvatarType = {
    width: number;
    height: number;
};

export const UserAvatar = ({ width, height }: UserAvatarType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const avatar = useTypedSelector(selectAvatar);
    const isAvatarBroken = useTypedSelector(state => state.auth.isAvatarBroken);

    const [ava, setAva] = useState(avatar);

    const handleError = (): void => {
        setAva(defaultAvatar);
        if (!isAvatarBroken) {
            dispatch(setIsAvatarBrokenAC(true));
            dispatch(setAuthErrorAC('Your avatar is broken'));
        }
    };

    useEffect(() => {
        setAva(avatar);
    }, [avatar]);

    return <Avatar onError={handleError} alt="avatar" src={ava} sx={{ width, height }} />;
};
