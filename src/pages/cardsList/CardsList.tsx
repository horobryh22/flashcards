import React, { useEffect } from 'react';

import { Grid } from '@mui/material';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';

import { CardsSearchParams, SortTypes } from 'api/types';
import {
    ArrowBackTo,
    CardsTable,
    CardsTopContent,
    CustomPagination,
    EmptyPack,
    PackCover,
    Search,
} from 'components';
import { useAppDispatch, useTypedSelector } from 'hooks';
import {
    setCardCurrentPageAC,
    setCardPageCountAC,
    setCardQuestionAC,
    setCardsSearchParamsAC,
    setModalTypeAC,
} from 'store/actions';
import { fetchCards } from 'store/middlewares';
import {
    selectAuthUserId,
    selectCardQuestion,
    selectCardsPackId,
    selectCardsPackName,
    selectCardsPage,
    selectCardsPageCount,
    selectCardsTotalCount,
    selectIsCardsFetched,
    selectIsPackDeleted,
    selectIsUserAuth,
    selectPackCover,
    selectPackUserId,
    selectSortCards,
} from 'store/selectors';
import { ReturnComponentType } from 'types';
import { isBase64 } from 'utils';

const CARDS_PAGE_COUNT_VALUES = [5, 10, 15, 20, 25];

export const CardsList = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const [searchParams] = useSearchParams();

    const isUserAuth = useTypedSelector(selectIsUserAuth);
    const packName = useTypedSelector(selectCardsPackName);
    const isPackDeleted = useTypedSelector(selectIsPackDeleted);
    const totalCount = useTypedSelector(selectCardsTotalCount);
    const isCardsFetched = useTypedSelector(selectIsCardsFetched);
    const authUserId = useTypedSelector(selectAuthUserId);
    const packUserId = useTypedSelector(selectPackUserId);
    const packCover = useTypedSelector(selectPackCover);

    const cardsPackId = useTypedSelector(selectCardsPackId);
    const cardQuestion = useTypedSelector(selectCardQuestion);
    const page = useTypedSelector(selectCardsPage);
    const pageCount = useTypedSelector(selectCardsPageCount);
    const sortCards = useTypedSelector(selectSortCards);

    const paramCardsPackId = searchParams.get('cardsPack_id') || cardsPackId;
    const paramCardQuestion = searchParams.get('cardQuestion') || cardQuestion;
    const paramPage = Number(searchParams.get('page')) || page;
    const paramPageCount = Number(searchParams.get('pageCount')) || pageCount;
    const paramSortCards = searchParams.get('sortCards') || sortCards;

    const buttonNameCondition =
        authUserId === packUserId ? 'Add new card' : 'Learn to pack';

    useEffect(() => {
        if (cardsPackId) {
            dispatch(fetchCards());
        }
    }, [cardsPackId, cardQuestion, page, pageCount, sortCards]);

    useEffect(() => {
        const params: CardsSearchParams = {
            cardsPack_id: paramCardsPackId,
            sortCards: paramSortCards as SortTypes,
            cardQuestion: paramCardQuestion,
            max: 120,
            page: paramPage,
            pageCount: paramPageCount,
            min: 0,
            cardAnswer: '',
        };

        dispatch(setCardsSearchParamsAC(params));
    }, [paramCardsPackId, paramCardQuestion, paramPage, paramPageCount, paramSortCards]);

    const handleValueChange = (value: string): void => {
        dispatch(setCardQuestionAC(value));
    };

    const handlePageChange = (value: number): void => {
        dispatch(setCardCurrentPageAC(value));
    };

    const handlePageCountChange = (value: string): void => {
        dispatch(setCardPageCountAC(Number(value)));
    };

    const learnPack = async (): Promise<void> => {
        await dispatch(setCardPageCountAC(totalCount));
        await dispatch(setCardCurrentPageAC(1));
        navigate('/learn');
    };

    const addCard = (): void => {
        dispatch(
            setModalTypeAC({
                isOpen: true,
                type: 'addCard',
                modalTitle: 'Add new card',
                buttonName: 'Save',
            }),
        );
    };

    if (isPackDeleted) {
        return <Navigate to="/packs" />;
    }

    if (!isUserAuth) {
        return <Navigate to="/login" />;
    }

    return (
        <Grid justifyContent="center" alignContent="flex-end" width="100%">
            <ArrowBackTo />
            {totalCount ? (
                <>
                    <CardsTopContent
                        title={packName}
                        buttonName={buttonNameCondition}
                        isButtonNeed
                        addItem={addCard}
                        learnPack={learnPack}
                        style={{ marginTop: '50px', marginBottom: '0px' }}
                    />
                    {packCover && isBase64(packCover) && <PackCover />}
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
        </Grid>
    );
};
