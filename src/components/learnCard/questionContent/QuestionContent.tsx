import React from 'react';

import classes from './QuestionContent.module.css';
import { QuestionContentType } from './types';

import { ReturnComponentType } from 'types';
import { isBase64 } from 'utils';

export const QuestionContent = ({
    questionImg,
    question,
}: QuestionContentType): ReturnComponentType => {
    return (
        <>
            <div className={classes.subtitle}>
                <span>Question: </span>
                {question !== 'no question' && question}
            </div>
            {isBase64(questionImg) && (
                <div className={classes.questionCover}>
                    <img src={questionImg} alt="question" />
                </div>
            )}
        </>
    );
};
