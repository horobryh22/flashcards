import React from 'react';

import { Navigate } from 'react-router-dom';

import classes from './LearnPack.module.css';

import { AnswerContent, ArrowBackTo } from 'components';
import { useTypedSelector } from 'hooks';
import { selectCardsPackName, selectIsCardsFetched } from 'store/selectors';
import { ReturnComponentType } from 'types';
import { getRandomCard } from 'utils';

export const LearnPack = (): ReturnComponentType => {
    const cards = useTypedSelector(state => state.cards.cards);
    const randomCard = getRandomCard(cards);
    const packName = useTypedSelector(selectCardsPackName);
    const isCardsFetched = useTypedSelector(selectIsCardsFetched);

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
                <AnswerContent answer={randomCard.answer} card_id={randomCard._id} />
            </div>
        </div>
    );
};
