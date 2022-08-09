import React, { useEffect, useState } from 'react';

import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from '@mui/material';

import s from './LearnCard.module.css';

import { StyledButton } from 'components/header/styles';
import { LearnCardContainer } from 'components/learnCard/LearnCardContainer';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { fetchCards } from 'store/middlewares';
import { selectSelectedPackName } from 'store/selectors/selectSelectedPackName/selectSelectedPackName';
import { ReturnComponentType } from 'types';
import { getRandomCard } from 'utils/getRandomCard/getRandomCard';

const grades = [
    'Did not know',
    'Forgot',
    'A lot of thought',
    'Confused',
    'Knew the answer',
];

export const LearnCard = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const id = useTypedSelector(state => state.packs.selectedCardsPack._id);
    const packName = useTypedSelector(selectSelectedPackName);
    const cards = useTypedSelector(state => state.cards.cards);

    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [first, setFirst] = useState(true);
    const [card, setCard] = useState({
        cardsPack_id: '',
        question: '',
        answer: '',
        grade: 0,
        shots: 0,
        user_id: '',
        _id: '',
        type: '',
        rating: 0,
    });

    const onNext = (): void => {
        setIsChecked(true);
    };

    useEffect(() => {
        if (first) {
            dispatch(fetchCards(id));
            setFirst(false);
        }

        if (cards.length > 0) {
            setCard(getRandomCard(cards));
        }
    }, [id, cards, dispatch, first]);

    if (cards.length === 0) {
        return (
            <LearnCardContainer title={packName || ''}>
                <h3 className={s.center}>There are no cards</h3>
            </LearnCardContainer>
        );
    }

    return (
        <LearnCardContainer title={packName || ''}>
            <p className={s.description}>Number of replies: {card.shots}</p>
            <h3 className={s.question}>
                Question: <span className={s.answer}>{card.question}</span>
            </h3>
            <div>
                {isChecked ? (
                    <div className={s.answerContainer}>
                        <h3 className={s.question}>
                            Answer:<span className={s.answer}>{card.answer}</span>
                        </h3>
                        <hr />
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">
                                Rate yourself:
                            </FormLabel>
                            <RadioGroup
                                aria-labelledby="grades"
                                defaultValue={grades[0]}
                                name="grade"
                            >
                                {grades.map(grade => {
                                    return (
                                        <FormControlLabel
                                            key={`${grade}key`}
                                            value={grade}
                                            control={<Radio />}
                                            label={grade}
                                        />
                                    );
                                })}
                            </RadioGroup>
                        </FormControl>
                        <StyledButton
                            className={s.btn}
                            variant="contained"
                            color="primary"
                            onClick={() => setIsChecked(false)}
                        >
                            Next question
                        </StyledButton>
                    </div>
                ) : (
                    <StyledButton
                        className={s.btn}
                        variant="contained"
                        color="primary"
                        onClick={onNext}
                    >
                        Show answer
                    </StyledButton>
                )}
            </div>
        </LearnCardContainer>
        // <Container className={s.container}>
        //     <NavLink to="/packs" className={s.breadcrumbs}>
        //         <ArrowBackIcon />
        //         <span>Back to packs List</span>
        //     </NavLink>
        //     <h2 className={s.title}>
        //         <span className={s.tooltip}>Learn:</span> {packName}
        //     </h2>
        //     <div className={s.wrapper}>
        //         <p className={s.description}>Number of replies: {card.shots}</p>
        //         <h3 className={s.question}>
        //             Question: <span className={s.answer}>{card.question}</span>
        //         </h3>
        //         <div>
        //             {isChecked ? (
        //                 <div className={s.answerContainer}>
        //                     <h3 className={s.question}>
        //                         Answer:<span className={s.answer}>{card.answer}</span>
        //                     </h3>
        //                     <hr />
        //                     <FormControl>
        //                         <FormLabel id="demo-radio-buttons-group-label">
        //                             Rate yourself:
        //                         </FormLabel>
        //                         <RadioGroup
        //                             aria-labelledby="grades"
        //                             defaultValue={grades[0]}
        //                             name="grade"
        //                         >
        //                             {grades.map(grade => {
        //                                 return (
        //                                     <FormControlLabel
        //                                         key={`${grade}key`}
        //                                         value={grade}
        //                                         control={<Radio />}
        //                                         label={grade}
        //                                     />
        //                                 );
        //                             })}
        //                         </RadioGroup>
        //                     </FormControl>
        //                     <StyledButton
        //                         className={s.btn}
        //                         variant="contained"
        //                         color="primary"
        //                         onClick={() => setIsChecked(false)}
        //                     >
        //                         Next question
        //                     </StyledButton>
        //                 </div>
        //             ) : (
        //                 <StyledButton
        //                     className={s.btn}
        //                     variant="contained"
        //                     color="primary"
        //                     onClick={onNext}
        //                 >
        //                     Show answer
        //                 </StyledButton>
        //             )}
        //         </div>
        //     </div>
        // </Container>
    );
};
