import React, { useEffect } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Box, Modal } from '@mui/material';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';

import classes from './ModalParent.module.css';
import { BOX_STYLES } from './styles';
import { FormValuesType, ModalMapperType, ModalParentType } from './types';

import { PackModal, CardModal, ModalContent } from 'components';
import { DELAY } from 'constant';
import { useAppDispatch, useTypedSelector } from 'hooks';
import {
    setAnswerCoverAC,
    setModalStateAC,
    setModalTypeAC,
    setPackCoverAC,
    setQuestionCoverAC,
    setQuestionFormatAC,
} from 'store/actions';
import {
    selectAnswerCover,
    selectButtonName,
    selectCardsPackId,
    selectCardsPackPrivate,
    selectModalCardAnswer,
    selectModalCardId,
    selectModalCardQuestion,
    selectModalTitle,
    selectModalType,
    selectPackId,
    selectPacksPackCover,
    selectPackTitle,
    selectQuestionCover,
    selectQuestionFormat,
} from 'store/selectors';
import { ReturnComponentType } from 'types';
import { chooseAction } from 'utils';

let TIMER: ReturnType<typeof setTimeout>;
const ELEMENT = document.createElement('div');
const MODAL_ROOT_ELEMENT = document.querySelector('#modal');

const MAX_STRING_LENGTH = 19;

export const ModalParent = ({ open, onClose }: ModalParentType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const questionFormat = useTypedSelector(selectQuestionFormat);
    const modalType = useTypedSelector(selectModalType);
    const modalTitle = useTypedSelector(selectModalTitle);
    const buttonName = useTypedSelector(selectButtonName);
    const packTitle = useTypedSelector(selectPackTitle);
    const packId = useTypedSelector(selectPackId);
    const packPrivate = useTypedSelector(selectCardsPackPrivate);
    const cardQuestion = useTypedSelector(selectModalCardQuestion);
    const cardAnswer = useTypedSelector(selectModalCardAnswer);
    const cardId = useTypedSelector(selectModalCardId);
    const cardsPack_id = useTypedSelector(selectCardsPackId);
    const packCover = useTypedSelector(selectPacksPackCover);
    const questionCover = useTypedSelector(selectQuestionCover);
    const answerCover = useTypedSelector(selectAnswerCover);

    const deletingPack =
        packTitle && packTitle.length > MAX_STRING_LENGTH
            ? `${packTitle?.slice(0, MAX_STRING_LENGTH)}...`
            : packTitle;

    const deletingCard =
        cardQuestion && cardQuestion.length > MAX_STRING_LENGTH
            ? `${cardQuestion?.slice(0, MAX_STRING_LENGTH)}...`
            : cardQuestion;

    const { control, handleSubmit, getValues, setValue, reset } = useForm({
        defaultValues: {
            name: '',
            private: false,
            question: '',
            answer: '',
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
        addCard: <CardModal control={control} />,
        editCard: <CardModal control={control} />,
        removeCard: (
            <div className={classes.modalContent}>
                Do you really want to remove{' '}
                <b>{deletingCard !== 'no question' ? deletingCard : 'this card'}</b>?
            </div>
        ),
    };

    const onSubmit = (values: FormValuesType): void => {
        chooseAction(
            modalType,
            dispatch,
            packId as string,
            values,
            cardId as string,
            cardsPack_id,
            packCover,
            questionCover,
            answerCover,
            questionFormat as 'text' | 'image',
        );

        TIMER = setTimeout(() => {
            dispatch(setModalStateAC(false));
        }, DELAY);
    };

    useEffect(() => {
        if (modalType === 'editPack') {
            setValue('name', packTitle as string);
            setValue('private', packPrivate as boolean);
        }

        if (modalType === 'editCard') {
            setValue(
                'question',
                cardQuestion && cardQuestion !== 'no question' ? cardQuestion : '',
            );
            setValue(
                'answer',
                cardAnswer && cardAnswer !== 'no answer' ? cardAnswer : '',
            );
        }
    }, [packTitle, modalType, packPrivate, cardQuestion, cardAnswer, open]);

    useEffect(() => {
        if (open && MODAL_ROOT_ELEMENT) {
            MODAL_ROOT_ELEMENT.appendChild(ELEMENT);

            return () => {
                MODAL_ROOT_ELEMENT.removeChild(ELEMENT);
                clearTimeout(TIMER);
            };
        }
    }, []);

    useEffect(() => {
        if (!open) {
            reset();
            dispatch(setPackCoverAC(''));
            dispatch(setQuestionFormatAC('text'));
            dispatch(setQuestionCoverAC(''));
            dispatch(setAnswerCoverAC(''));
            dispatch(
                setModalTypeAC({
                    questionImg: '',
                    answerImg: '',
                    isOpen: false,
                    buttonName: '',
                    modalTitle: '',
                    type: '',
                }),
            );
        }
    }, [open]);

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
