import React, { useState } from 'react';

import classes from './AnswerContent.module.css';
import { AnswerContentType } from './types';

import { RadioButton } from 'components';
import { StyledButton } from 'components/header/styles';
import { ReturnComponentType } from 'types';
import { isBase64 } from 'utils';

export const AnswerContent = ({
    card_id,
    answer,
}: AnswerContentType): ReturnComponentType => {
    const [visible, setVisible] = useState(false);

    const showAnswer = (): void => {
        setVisible(!visible);
    };

    return (
        <div style={{ width: '100%' }}>
            {visible ? (
                <div className={classes.answerContainer}>
                    <div className={classes.subtitle}>
                        <span>Answer: </span>
                        {isBase64(answer) ? (
                            <div className={classes.answerCover}>
                                <img src={answer} alt="answer" />
                            </div>
                        ) : (
                            answer
                        )}
                    </div>
                    <span>Rate yourself:</span>
                    <RadioButton card_id={card_id} setVisible={setVisible} />
                </div>
            ) : (
                <StyledButton onClick={showAnswer} variant="contained" fullWidth>
                    Show answer
                </StyledButton>
            )}
        </div>
    );
};
