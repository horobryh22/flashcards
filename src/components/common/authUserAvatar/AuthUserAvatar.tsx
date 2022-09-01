import React from 'react';

import { IconButton } from '@mui/material';

import classes from 'components/common/authUserAvatar/AuthUserAvatar.module.css';
import { AuthUserAvatarType } from 'components/common/authUserAvatar/types';
import { UserAvatar } from 'components/index';
import { ReturnComponentType } from 'types';

export const AuthUserAvatar = ({
    userName,
    open,
    handleClick,
}: AuthUserAvatarType): ReturnComponentType => {
    return (
        <div aria-hidden="true" className={classes.contentWrapper} onClick={handleClick}>
            <div className={classes.userName}>{userName}</div>
            <IconButton
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                <UserAvatar height={36} width={36} />
            </IconButton>
        </div>
    );
};
