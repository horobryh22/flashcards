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
    ModalParent,
    Search,
} from 'components';
import { useAppDispatch, useTypedSelector } from 'hooks';
import {
    setCardCurrentPageAC,
    setCardPageCountAC,
    setCardQuestionAC,
    setCardsSearchParamsAC,
    setModalStateAC,
} from 'store/actions';
import { fetchCards } from 'store/middlewares';
import { selectAuthUserId, selectIsOpen } from 'store/selectors';
import { ReturnComponentType } from 'types';

const CARDS_PAGE_COUNT_VALUES = [2, 4, 6, 8, 10];

export const CardsList = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [searchParams] = useSearchParams();

    const isOpen = useTypedSelector(selectIsOpen);

    const packName = useTypedSelector(state => state.cards.packName);

    const cardsPackId = useTypedSelector(state => state.cards.searchParams.cardsPack_id);
    const cardQuestion = useTypedSelector(state => state.cards.searchParams.cardQuestion);
    const page = useTypedSelector(state => state.cards.searchParams.page);
    const pageCount = useTypedSelector(state => state.cards.searchParams.pageCount);

    const totalCount = useTypedSelector(state => state.cards.cardsTotalCount);

    const isCardsFetched = useTypedSelector(state => state.cards.isCardsFetched);
    const authUserId = useTypedSelector(selectAuthUserId);
    const packUserId = useTypedSelector(state => state.cards.packUserId);

    const paramCardsPackId = searchParams.get('cardsPack_id') || cardsPackId;
    const paramCardQuestion = searchParams.get('cardQuestion') || cardQuestion;
    const paramPage = Number(searchParams.get('page')) || page;
    const paramPageCount = Number(searchParams.get('pageCount')) || pageCount;

    const buttonNameCondition =
        authUserId === packUserId ? 'Add new card' : 'Learn to pack';

    useEffect(() => {
        if (cardsPackId) {
            dispatch(fetchCards());
        }
    }, [cardsPackId, cardQuestion, page, pageCount]);

    useEffect(() => {
        const params: CardsSearchParams = {
            cardsPack_id: paramCardsPackId,
            sortCards: '0updated',
            cardQuestion: paramCardQuestion,
            max: 120,
            page: paramPage,
            pageCount: paramPageCount,
            min: 0,
            cardAnswer: '',
        };

        dispatch(setCardsSearchParamsAC(params));
    }, [paramCardsPackId, paramCardQuestion, paramPage, paramPageCount]);

    const handleValueChange = (value: string): void => {
        dispatch(setCardQuestionAC(value));
    };

    const handlePageChange = (value: number): void => {
        dispatch(setCardCurrentPageAC(value));
    };

    const handlePageCountChange = (value: string): void => {
        dispatch(setCardPageCountAC(Number(value)));
    };

    const onClose = (): void => {
        dispatch(setModalStateAC(false));
    };

    return (
        <Grid justifyContent="center" alignContent="flex-end" width="100%">
            <ArrowBackTo />
            {totalCount ? (
                <>
                    <CardsTopContent
                        title={packName}
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
                        pageCountValues={CARDS_PAGE_COUNT_VALUES}
                        page={page}
                        pageCount={pageCount}
                        isItemsFetched={isCardsFetched}
                        totalCount={totalCount}
                        setPage={handlePageChange}
                        setPageCount={handlePageCountChange}
                    />
                </>
            ) : (
                <EmptyPack title={packName} isMyPack={authUserId === packUserId} />
            )}
            <ModalParent open={isOpen} onClose={onClose} />
        </Grid>
    );
};
