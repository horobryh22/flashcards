import React, { ChangeEvent } from 'react';

import UploadIcon from '@mui/icons-material/Upload';
import { Button, MenuItem, Select, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

import classes from './CardModal.module.css';
import { CardModalType } from './types';

import { Cover, InputTypeFile } from 'components';
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
                    <Controller
                        name="question"
                        control={control}
                        render={({ field }) => (
                            <>
                                <span
                                    className={`${classes.helperText} ${classes.bottomHelperText}`}
                                >
                                    Question
                                </span>
                                <TextField
                                    {...field}
                                    size="small"
                                    variant="standard"
                                    fullWidth
                                />
                            </>
                        )}
                    />
                    <Controller
                        name="answer"
                        control={control}
                        render={({ field }) => (
                            <>
                                <span
                                    className={`${classes.helperText} ${classes.bottomHelperText}`}
                                >
                                    Answer
                                </span>
                                <TextField
                                    {...field}
                                    size="small"
                                    variant="standard"
                                    fullWidth
                                    style={{ marginBottom: 20 }}
                                />
                            </>
                        )}
                    />
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
                    <div className={classes.button}>
                        <InputTypeFile uploadHandler={handleQuestionUpload} id="question">
                            <Button
                                component="span"
                                variant="contained"
                                fullWidth
                                endIcon={<UploadIcon />}
                            >
                                UPLOAD QUESTION
                            </Button>
                        </InputTypeFile>
                    </div>
                    <Cover
                        cover={
                            answerCover ||
                            (isBase64(modalAnswerImg as string)
                                ? (modalAnswerImg as string)
                                : null)
                        }
                    />
                    <div className={classes.button}>
                        <InputTypeFile uploadHandler={handleAnswerUpload} id="answer">
                            <Button
                                component="span"
                                variant="contained"
                                fullWidth
                                endIcon={<UploadIcon />}
                            >
                                UPLOAD ANSWER
                            </Button>
                        </InputTypeFile>
                    </div>
                </>
            )}
        </div>
    );
};
