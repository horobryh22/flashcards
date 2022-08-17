import React, { useEffect } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Box, Modal } from '@mui/material';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';

import classes from './ModalParent.module.css';
import { BOX_STYLES } from './styles';
import { ModalMapperType, ModalParentType } from './types';

import { CardsPackType } from 'api/types';
import { ModalContent } from 'components';
import { PackModal } from 'components/modals';
import { DELAY } from 'constant';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setModalStateAC } from 'store/actions';
import {
    selectButtonName,
    selectModalTitle,
    selectModalType,
    selectPackId,
    selectPackPrivate,
    selectPackTitle,
} from 'store/selectors';
import { ReturnComponentType } from 'types';
import { chooseAction } from 'utils';

let TIMER: ReturnType<typeof setTimeout>;
const ELEMENT = document.createElement('div');
const MODAL_ROOT_ELEMENT = document.querySelector('#modal');

const MAX_STRING_LENGTH = 19;

export const ModalParent = ({ open, onClose }: ModalParentType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const modalType = useTypedSelector(selectModalType);
    const modalTitle = useTypedSelector(selectModalTitle);
    const buttonName = useTypedSelector(selectButtonName);
    const packTitle = useTypedSelector(selectPackTitle);
    const packId = useTypedSelector(selectPackId);
    const packPrivate = useTypedSelector(selectPackPrivate);

    const deletingPack =
        packTitle && packTitle.length > MAX_STRING_LENGTH
            ? `${packTitle?.slice(0, MAX_STRING_LENGTH)}...`
            : packTitle;

    const { control, handleSubmit, getValues, setValue, resetField } = useForm({
        defaultValues: {
            name: '',
            private: false,
        },
        mode: 'onSubmit',
    });

    const modalTypesMapper: ModalMapperType = {
        addPack: <PackModal control={control} getValues={getValues} />,
        editPack: (
            <PackModal control={control} getValues={getValues} packTitle={packTitle} />
        ),
        removePack: (
            <div className={classes.modalContent}>
                Do you really want to remove <b>{deletingPack}</b>
                ?<br /> All cards will be deleted.
            </div>
        ),
    };

    const onSubmit = (values: CardsPackType): void => {
        chooseAction(modalType, dispatch, packId as string, values);

        TIMER = setTimeout(() => {
            dispatch(setModalStateAC(false));
        }, DELAY);
    };

    useEffect(() => {
        if (modalType === 'addPack') {
            resetField('name');
            resetField('private');

            return;
        }

        setValue('name', packTitle as string);
        setValue('private', packPrivate as boolean);
    }, [packTitle, modalType, packPrivate]);

    useEffect(() => {
        if (open && MODAL_ROOT_ELEMENT) {
            MODAL_ROOT_ELEMENT.appendChild(ELEMENT);

            return () => {
                MODAL_ROOT_ELEMENT.removeChild(ELEMENT);
                clearTimeout(TIMER);
            };
        }
    }, []);

    if (open) {
        return createPortal(
            <Modal open={open} onClose={onClose}>
                <Box sx={BOX_STYLES}>
                    <div className={classes.modalHeader}>
                        <span>{modalTitle}</span>
                        <CloseIcon onClick={onClose} style={{ cursor: 'pointer' }} />
                    </div>
                    <ModalContent
                        onSubmit={handleSubmit(onSubmit)}
                        content={modalTypesMapper}
                        modalType={modalType}
                        onClose={onClose}
                        buttonName={buttonName}
                    />
                </Box>
            </Modal>,
            ELEMENT,
        );
    }

    return null;
};
