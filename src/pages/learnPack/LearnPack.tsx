import React, { useState } from 'react';

import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

import classes from './LearnPack.module.css';

import { ArrowBackTo } from 'components';
import { StyledButton } from 'components/header/styles';
import { useTypedSelector } from 'hooks';
import { selectCardsPackName } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const LearnPack = (): ReturnComponentType => {
    const packName = useTypedSelector(selectCardsPackName);

    const [visible, setVisible] = useState(false);

    const question = 'How "This" works in JavaScript?';
    const answer = 'This is how "This" works in JavaScript';
    const answersAmount = 1;

    const showAnswer = (): void => {
        setVisible(true);
    };

    return (
        <div className={classes.container}>
            <ArrowBackTo />
            <div className={classes.title}>{`Learn '${packName}'`}</div>
            <div className={classes.questionContainer}>
                <div className={classes.subtitle}>
                    <span>Question: </span>
                    {question}
                </div>
                <span className={classes.answersAmount}>
                    Amount of answers per question: {answersAmount}
                </span>
                {visible ? (
                    <div className={classes.answerContainer}>
                        <div className={classes.subtitle}>
                            <span>Answer: </span>
                            {answer}
                        </div>
                        <span>Rate yourself:</span>
                        <FormControl>
                            <RadioGroup defaultValue="1" name="radio-buttons-group">
                                <FormControlLabel
                                    value="1"
                                    control={<Radio />}
                                    label="Did not know"
                                />
                                <FormControlLabel
                                    value="2"
                                    control={<Radio />}
                                    label="Forgot"
                                />
                                <FormControlLabel
                                    value="3"
                                    control={<Radio />}
                                    label="A lot of thought"
                                />
                                <FormControlLabel
                                    value="4"
                                    control={<Radio />}
                                    label="Confused"
                                />
                                <FormControlLabel
                                    value="5"
                                    control={<Radio />}
                                    label="Knew the answer"
                                />
                            </RadioGroup>
                        </FormControl>
                        <StyledButton
                            style={{ marginTop: 40 }}
                            variant="contained"
                            fullWidth
                        >
                            Next
                        </StyledButton>
                    </div>
                ) : (
                    <StyledButton onClick={showAnswer} variant="contained" fullWidth>
                        Show answer
                    </StyledButton>
                )}
            </div>
        </div>
    );
};
