import React from 'react';

import { useNavigate } from 'react-router-dom';

import classes from './NotFound.module.css';

import errorImage from 'assets/images/404.svg';
import { StyledButton } from 'components/common/header/styles';
import { ReturnComponentType } from 'types';

export const NotFound = (): ReturnComponentType => {
    const navigate = useNavigate();

    const handleClick = (): void => {
        navigate('/login');
    };

    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <h2 className={classes.title}>Ooops!</h2>
                <span className={classes.description}>Sorry! Page not found!</span>
                <StyledButton
                    onClick={handleClick}
                    variant="contained"
                    style={{ padding: '8px 30px', marginTop: '35px' }}
                >
                    Back to home page
                </StyledButton>
            </div>
            <div>
                <img src={errorImage} alt="error" />
            </div>
        </div>
    );
};
