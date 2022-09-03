import React, { ChangeEvent } from 'react';

import { MenuItem, Select } from '@mui/material';

import classes from './CardModal.module.css';
import { CardModalType } from './types';

import { Cover, ModalInput, UploadButton } from 'components';
import { MAX_FILE_SIZE } from 'constant';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setAnswerCoverAC, setQuestionCoverAC, setQuestionFormatAC } from 'store/actions';
import {
    selectAnswerCover,
    selectAnswerImg,
    selectQuestionCover,
    selectQuestionFormat,
    selectQuestionImg,
} from 'store/selectors';
import { ReturnComponentType } from 'types';
import { convertFileToBase64, isBase64 } from 'utils';

export const CardModal = ({ control }: CardModalType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const questionFormat = useTypedSelector(selectQuestionFormat);
    const modalQuestionImg = useTypedSelector(selectQuestionImg);
    const modalAnswerImg = useTypedSelector(selectAnswerImg);
    const questionCover = useTypedSelector(selectQuestionCover);
    const answerCover = useTypedSelector(selectAnswerCover);

    const handleAnswerUpload = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0];

            if (file.size < MAX_FILE_SIZE) {
                convertFileToBase64(file, (file64: string) => {
                    dispatch(setAnswerCoverAC(file64));
                });
            }
        }
    };

    const handleQuestionUpload = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0];

            if (file.size < MAX_FILE_SIZE) {
                convertFileToBase64(file, (file64: string) => {
                    dispatch(setQuestionCoverAC(file64));
                });
            }
        }
    };

    const handleChange = (): void => {
        if (questionFormat === 'text') {
            dispatch(setQuestionFormatAC('image'));
        }

        if (questionFormat === 'image') {
            dispatch(setQuestionFormatAC('text'));
        }
    };

    return (
        <div className={classes.modalBody}>
            <span className={classes.helperText}>Choose a question format</span>
            <Select fullWidth size="small" onChange={handleChange} value={questionFormat}>
                <MenuItem value="text">Text</MenuItem>
                <MenuItem value="image">Image</MenuItem>
            </Select>
            {questionFormat === 'text' ? (
                <>
                    <ModalInput control={control} name="question" helperText="Question" />
                    <ModalInput control={control} name="answer" helperText="Answer" />
                </>
            ) : (
                <>
                    <Cover
                        cover={
                            questionCover ||
                            (isBase64(modalQuestionImg as string)
                                ? (modalQuestionImg as string)
                                : null)
                        }
                    />
                    <UploadButton
                        id="question"
                        handleUpload={handleQuestionUpload}
                        buttonName="UPLOAD QUESTION"
                    />
                    <Cover
                        cover={
                            answerCover ||
                            (isBase64(modalAnswerImg as string)
                                ? (modalAnswerImg as string)
                                : null)
                        }
                    />
                    <UploadButton
                        id="answer"
                        handleUpload={handleAnswerUpload}
                        buttonName="UPLOAD ANSWER"
                    />
                </>
            )}
        </div>
    );
};
