import React, { useEffect } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';
import { NavLink, useParams } from 'react-router-dom';

import s from './Cards.module.css';

import { SearchParamsCardsType } from 'api/types';
import { CardsTopContent } from 'components';
import { CardsList } from 'components/cartdList/CardsList';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { fetchCards } from 'store/middlewares';
import { createCard } from 'store/middlewares/cards/createCard';
import { selectAuthUserId, selectCardPacks, selectUserIdFromPack } from 'store/selectors';
import { ReturnComponentType } from 'types';
import { NewCard } from 'utils/newCardCreator/newCardCreator';

export const Cards = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const { cardsPack_id } = useParams();

    const cards = useTypedSelector(state => state.cards.cards);
    const packs = useTypedSelector(selectCardPacks);
    const currentPuck = packs.find(pack => pack._id === cardsPack_id);
    const currentPuckName = currentPuck?.name || '';

    const packUserId = useTypedSelector(selectUserIdFromPack);
    const userId = useTypedSelector(selectAuthUserId);

    const disabled = userId !== packUserId;

    const addNewCard = (): void => {
        const newCard = NewCard();

        newCard.cardsPack_id = cardsPack_id || '';
        newCard.grade = 1.2;

        dispatch(createCard(newCard, { cardsPack_id } as SearchParamsCardsType));
    };

    useEffect(() => {
        dispatch(fetchCards({ cardsPack_id } as SearchParamsCardsType));
    }, []);

    return (
        <div className={s.wrapper}>
            <NavLink to="/packs" className={s.breadcrumbs}>
                <ArrowBackIcon />
                <span>Back to packs List</span>
            </NavLink>
            <CardsTopContent
                title={currentPuckName}
                buttonName="Add new card"
                isButtonNeed
                callback={addNewCard}
                disabled={disabled}
            >
                <TextField
                    name="searchCard"
                    variant="outlined"
                    label="Search"
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </CardsTopContent>
            <CardsList
                cards={cards}
                cardsPack_id={cardsPack_id || ''}
                disabled={disabled}
            />
        </div>
    );
};
