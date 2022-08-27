import React from 'react';

import { MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

import classes from './CardModal.module.css';
import { CardModalType } from './types';

import { ReturnComponentType } from 'types';

export const CardModal = ({ control }: CardModalType): ReturnComponentType => {
    const [questionFormat, setQuestionFormat] = React.useState('Text');

    const handleChange = (event: SelectChangeEvent): void => {
        setQuestionFormat(event.target.value);
    };

    return (
        <div className={classes.modalBody}>
            <span className={classes.helperText}>Choose a question format</span>
            <Select
                fullWidth
                defaultValue="Text"
                size="small"
                onChange={handleChange}
                value={questionFormat}
            >
                <MenuItem value="Text">Text</MenuItem>
                <MenuItem value="Image">Image</MenuItem>
            </Select>
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
                        <TextField {...field} size="small" variant="standard" fullWidth />
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
        </div>
    );
};
