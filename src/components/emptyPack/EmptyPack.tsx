import React from 'react';

import classes from './EmptyPack.module.css';
import { EmptyPackType } from './types';

import { CardsTopContent } from 'components';
import { StyledButton } from 'components/header/styles';
import { ReturnComponentType } from 'types';

export const EmptyPack = ({ title, isMyPack }: EmptyPackType): ReturnComponentType => {
    return (
        <>
            <CardsTopContent
                title={title}
                buttonName=""
                isButtonNeed={false}
                callback={() => {}}
                style={{ marginTop: '50px', marginBottom: '0px' }}
            />
            <div className={classes.wrapper}>
                <span className={classes.description}>
                    This pack is empty. Click add new card to fill this pack
                </span>
                {isMyPack && (
                    <StyledButton
                        variant="contained"
                        style={{ padding: '8px 28px' }}
                        onClick={() => {}}
                    >
                        Add new card
                    </StyledButton>
                )}
            </div>
        </>
    );
};
