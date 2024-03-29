import React, { useMemo } from 'react';

import { Navigate } from 'react-router-dom';

import classes from './LearnPack.module.css';

import { AnswerContent, ArrowBackTo, QuestionContent } from 'components';
import { useTypedSelector } from 'hooks';
import {
    selectCards,
    selectCardsPackName,
    selectIsCardsFetched,
    selectIsUserAuth,
} from 'store/selectors';
import { ReturnComponentType } from 'types';
import { getRandomCard } from 'utils';

export const LearnPack = (): ReturnComponentType => {
    const isUserAuth = useTypedSelector(selectIsUserAuth);
    const cards = useTypedSelector(selectCards);
    const randomCard = useMemo(() => {
        return getRandomCard(cards);
    }, [cards]);
    const packName = useTypedSelector(selectCardsPackName);
    const isCardsFetched = useTypedSelector(selectIsCardsFetched);

    if (!isCardsFetched) {
        return <Navigate to="/packs" />;
    }

    if (!isUserAuth) {
        return <Navigate to="/login" />;
    }

    return (
        <div className={classes.container}>
            <ArrowBackTo />
            <div className={classes.title}>{`Learn '${packName}'`}</div>
            <div className={classes.questionContainer}>
                <QuestionContent
                    question={randomCard.question}
                    questionImg={randomCard.questionImg}
                />
                <span className={classes.answersAmount}>
                    Amount of answers per question: {randomCard?.shots}
                </span>
                <AnswerContent
                    answer={
                        randomCard?.answer !== 'no answer'
                            ? randomCard.answer
                            : randomCard.answerImg
                    }
                    card_id={randomCard?._id}
                />
            </div>
        </div>
    );
};
