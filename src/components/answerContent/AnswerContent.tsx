import React, { useState } from 'react';

import classes from './AnswerContent.module.css';
import { AnswerContentType } from './types';

import { RadioButton } from 'components';
import { StyledButton } from 'components/header/styles';
import { ReturnComponentType } from 'types';

export const AnswerContent = ({
    card_id,
    answer,
}: AnswerContentType): ReturnComponentType => {
    const [visible, setVisible] = useState(false);

    const showAnswer = (): void => {
        setVisible(true);
    };

    return (
        <div style={{ width: '100%' }}>
            {visible ? (
                <div className={classes.answerContainer}>
                    <div className={classes.subtitle}>
                        <span>Answer: </span>
                        {answer}
                    </div>
                    <span>Rate yourself:</span>
                    <RadioButton card_id={card_id} />
                </div>
            ) : (
                <StyledButton onClick={showAnswer} variant="contained" fullWidth>
                    Show answer
                </StyledButton>
            )}
        </div>
    );
};
