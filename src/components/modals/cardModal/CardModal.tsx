import React, { ChangeEvent } from 'react';

import UploadIcon from '@mui/icons-material/Upload';
import { Button, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

import classes from './CardModal.module.css';
import { CardModalType } from './types';

import { InputTypeFile } from 'components/inputTypeFile/InputTypeFile';
import { useAppDispatch } from 'hooks';
import { setPackCoverAC } from 'store/actions';
import { ReturnComponentType } from 'types';
import { convertFileToBase64 } from 'utils';

const MAX_FILE_SIZE = 4000000;

export const CardModal = ({ control }: CardModalType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [questionFormat, setQuestionFormat] = React.useState('text');

    const handleAnswerUpload = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0];

            if (file.size < MAX_FILE_SIZE) {
                convertFileToBase64(file, (file64: string) => {
                    dispatch(setPackCoverAC(file64));
                });
            }
        }
    };

    const handleQuestionUpload = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0];

            if (file.size < MAX_FILE_SIZE) {
                convertFileToBase64(file, (file64: string) => {
                    dispatch(setPackCoverAC(file64));
                });
            }
        }
    };

    const handleChange = (event: SelectChangeEvent): void => {
        setQuestionFormat(event.target.value);
    };

    return (
        <div className={classes.modalBody}>
            <span className={classes.helperText}>Choose a question format</span>
            <Select
                fullWidth
                defaultValue="text"
                size="small"
                onChange={handleChange}
                value={questionFormat}
            >
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
                    <div className={classes.button}>
                        <InputTypeFile uploadHandler={handleQuestionUpload}>
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
                    <div className={classes.button}>
                        <InputTypeFile uploadHandler={handleAnswerUpload}>
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
