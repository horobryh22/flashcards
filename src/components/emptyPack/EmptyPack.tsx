import React from 'react';

import classes from './EmptyPack.module.css';
import { EmptyPackType } from './types';

import { CardsTopContent, PackCover } from 'components';
import { StyledButton } from 'components/header/styles';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setModalTypeAC } from 'store/actions';
import { ReturnComponentType } from 'types';
import { isBase64 } from 'utils';

export const EmptyPack = ({ title, isMyPack }: EmptyPackType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const packCover = useTypedSelector(state => state.cards.packDeckCover);

    const addCard = (): void => {
        dispatch(
            setModalTypeAC({
                isOpen: true,
                type: 'addCard',
                modalTitle: 'Add new card',
                buttonName: 'Save',
            }),
        );
    };

    return (
        <>
            <CardsTopContent
                title={title}
                buttonName=""
                isButtonNeed={false}
                style={{ marginTop: '50px', marginBottom: '0px' }}
            />
            {isBase64(packCover as string) && <PackCover />}
            <div className={classes.wrapper}>
                <span className={classes.description}>
                    This pack is empty. Click add new card to fill this pack
                </span>
                {isMyPack && (
                    <StyledButton
                        variant="contained"
                        style={{ padding: '8px 28px' }}
                        onClick={addCard}
                    >
                        Add new card
                    </StyledButton>
                )}
            </div>
        </>
    );
};
