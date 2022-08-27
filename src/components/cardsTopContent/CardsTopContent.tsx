import React from 'react';

import { IconButton } from '@mui/material';

import classes from './CardsTopContent.module.css';
import { CardsTopContentType } from './types';

import actionsGroup from 'assets/images/actionsGroup.svg';
import { StyledButton } from 'components/header/styles';
import { PackMenu } from 'components/menus/PackMenu';
import { useTypedSelector } from 'hooks';
import { selectAuthUserId, selectPackUserId } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const CardsTopContent: React.FC<CardsTopContentType> = ({
    isButtonNeed,
    buttonName,
    title,
    children,
    callback,
    style,
}): ReturnComponentType => {
    const [element, setElement] = React.useState<null | HTMLElement>(null);

    const open = Boolean(element);

    const packUserId = useTypedSelector(selectPackUserId);
    const authUserId = useTypedSelector(selectAuthUserId);

    const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
        setElement(event.currentTarget);
    };

    return (
        <div className={classes.container}>
            <div className={classes.wrapper} style={style}>
                <div className={classes.titleWrapper}>
                    <h2 className={classes.title}>{title}</h2>
                    {packUserId === authUserId && (
                        <>
                            <IconButton
                                className={classes.titleButton}
                                onClick={handleClick}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <img src={actionsGroup} alt="group" />
                            </IconButton>
                            <PackMenu
                                open={open}
                                setElement={setElement}
                                element={element}
                            />
                        </>
                    )}
                </div>
                <div>
                    {isButtonNeed && (
                        <StyledButton
                            variant="contained"
                            style={{ padding: '8px 28px' }}
                            onClick={callback}
                        >
                            {buttonName}
                        </StyledButton>
                    )}
                </div>
            </div>
            {children && children}
        </div>
    );
};
