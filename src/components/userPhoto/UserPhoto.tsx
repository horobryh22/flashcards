import React from 'react';

import { UserPhotoPropsType } from './types';
import classes from './UserPhoto.module.css';

import { ReturnComponentType } from 'types';

export const UserPhoto = ({ variant }: UserPhotoPropsType): ReturnComponentType => {
    return (
        <div className={`${classes.container} ${classes[variant]} ${classes.photoBox}`} />
    );
};
