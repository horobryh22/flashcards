import React from 'react';

export type AuthUserAvatarType = {
    handleClick: (event: React.MouseEvent<HTMLElement>) => void;
    userName: string;
    open: boolean;
};
