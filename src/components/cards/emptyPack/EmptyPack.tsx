import React from 'react';

import classes from './EmptyPack.module.css';
import { EmptyPackType } from './types';

import { StyledButton } from 'components/common/header/styles';
import { CardsTopContent, PackCover } from 'components/index';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setModalTypeAC } from 'store/actions';
import { selectPackCover } from 'store/selectors';
import { ReturnComponentType } from 'types';
import { isBase64 } from 'utils';

export const EmptyPack = ({ title, isMyPack }: EmptyPackType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const packCover = useTypedSelector(selectPackCover);

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
            {packCover && isBase64(packCover) && <PackCover />}
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
