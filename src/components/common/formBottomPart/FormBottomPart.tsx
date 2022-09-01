import React from 'react';

import { FormHelperText } from '@mui/material';
import { NavLink } from 'react-router-dom';

import classes from './FormBottomPart.module.css';
import { FormBottomPartType } from './types';

import { StyledButton } from 'components/common/header/styles';
import { ReturnComponentType } from 'types';

export const FormBottomPart: React.FC<FormBottomPartType> = ({
    linkText,
    helperText,
    buttonName,
    redirectTo,
}): ReturnComponentType => {
    return (
        <div className={classes.wrapper}>
            <StyledButton type="submit" variant="contained" color="primary">
                {buttonName}
            </StyledButton>
            <FormHelperText>{helperText}</FormHelperText>
            <NavLink className={classes.link} to={`${redirectTo}`}>
                {linkText}
            </NavLink>
        </div>
    );
};
