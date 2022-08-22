import React, { useEffect } from 'react';

import { Grid } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import { CardsSearchParams } from 'api/types';
import {
    ArrowBackTo,
    CardsTable,
    CardsTopContent,
    CustomPagination,
    EmptyPack,
    Search,
} from 'components';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setCardQuestionAC, setCardsSearchParamsAC } from 'store/actions';
import { fetchCards } from 'store/middlewares';
import { selectAuthUserId } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const CardsList = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [searchParams] = useSearchParams();

    const cardsPackId = useTypedSelector(state => state.cards.searchParams.cardsPack_id);
    const cardQuestion = useTypedSelector(state => state.cards.searchParams.cardQuestion);

    const isCardsFetched = useTypedSelector(state => state.cards.isCardsFetched);
    const authUserId = useTypedSelector(selectAuthUserId);
    const packUserId = useTypedSelector(state => state.cards.packUserId);

    const page = useTypedSelector(state => state.cards.searchParams.page);
    const pageCount = useTypedSelector(state => state.cards.searchParams.pageCount);
    const totalCount = useTypedSelector(state => state.cards.cardsTotalCount);

    const paramCardsPackId = searchParams.get('cardsPack_id') || cardsPackId;
    const paramCardQuestion = searchParams.get('cardQuestion') || cardQuestion;

    const buttonNameCondition =
        authUserId === packUserId ? 'Add new card' : 'Learn to pack';

    useEffect(() => {
        if (cardsPackId) {
            dispatch(fetchCards());
        }
    }, [cardsPackId, cardQuestion]);

    useEffect(() => {
        const params: CardsSearchParams = {
            cardsPack_id: paramCardsPackId,
            sortCards: '0updated',
            cardQuestion: paramCardQuestion,
            max: 120,
            page: 1,
            pageCount: 6,
            min: 0,
            cardAnswer: '',
        };

        dispatch(setCardsSearchParamsAC(params));
    }, [paramCardsPackId, paramCardQuestion]);

    const handleValueChange = (value: string): void => {
        dispatch(setCardQuestionAC(value));
    };

    return (
        <Grid justifyContent="center" alignContent="flex-end" width="100%">
            <ArrowBackTo />
            {totalCount ? (
                <>
                    <CardsTopContent
                        title="DEFAULT NAME"
                        buttonName={buttonNameCondition}
                        isButtonNeed
                        callback={() => {}}
                        style={{ marginTop: '50px', marginBottom: '0px' }}
                    />
                    <Search
                        onChangeValue={handleValueChange}
                        uriParam="cardQuestion"
                        fullWidth
                        isDataFetched={isCardsFetched}
                        style={{ marginTop: '0px' }}
                        defaultValue={cardQuestion}
                    />
                    <CardsTable />
                    <CustomPagination
                        page={page}
                        pageCount={pageCount}
                        isItemsFetched={isCardsFetched}
                        totalCount={totalCount}
                    />
                    {/* <ModalParent open={false} onClose={() => {}} /> */}
                </>
            ) : (
                <EmptyPack title="DEFAULT NAME" isMyPack={authUserId === packUserId} />
            )}
        </Grid>
    );
};
