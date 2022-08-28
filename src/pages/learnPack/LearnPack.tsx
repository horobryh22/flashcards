import React, { useState } from 'react';

import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { Navigate } from 'react-router-dom';

import classes from './LearnPack.module.css';

import { ArrowBackTo } from 'components';
import { StyledButton } from 'components/header/styles';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { updateCardGrade } from 'store/middlewares';
import { selectCardsPackName, selectIsCardsFetched } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const LearnPack = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [grade, setGrade] = React.useState('1');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setGrade((event.target as HTMLInputElement).value);
    };

    const cards = useTypedSelector(state => state.cards.cards);
    const randomCard = cards[0];
    const packName = useTypedSelector(selectCardsPackName);
    const isCardsFetched = useTypedSelector(selectIsCardsFetched);

    const [visible, setVisible] = useState(false);

    const showAnswer = (): void => {
        setVisible(true);
    };

    const handleClick = (): void => {
        dispatch(updateCardGrade(Number(grade), randomCard._id));
    };

    if (!isCardsFetched) {
        return <Navigate to="/packs" />;
    }

    return (
        <div className={classes.container}>
            <ArrowBackTo />
            <div className={classes.title}>{`Learn '${packName}'`}</div>
            <div className={classes.questionContainer}>
                <div className={classes.subtitle}>
                    <span>Question: </span>
                    {randomCard.question}
                </div>
                <span className={classes.answersAmount}>
                    Amount of answers per question: {randomCard.shots}
                </span>
                {visible ? (
                    <div className={classes.answerContainer}>
                        <div className={classes.subtitle}>
                            <span>Answer: </span>
                            {randomCard.answer}
                        </div>
                        <span>Rate yourself:</span>
                        <FormControl>
                            <RadioGroup
                                value={grade}
                                onChange={handleChange}
                                name="radio-buttons-group"
                            >
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
                            onClick={handleClick}
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
