import { Paper, Skeleton, Table, TableContainer } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import classes from './CardsTable.module.css';

import { CardsTableRows, MainTableRow, NoResultsFound } from 'components';
import { DEFAULT_PAGE_COUNT, ROW_HEIGHT } from 'constant';
import { CARDS_COLUMNS } from 'constant/table/cardsColumns';
import { useTypedSelector } from 'hooks';
import { selectCardsTotalCount, selectIsCardsFetched } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const CardsTable = (): ReturnComponentType => {
    const [searchParams] = useSearchParams();

    const isCardsFetched = useTypedSelector(selectIsCardsFetched);
    const paramPageCount =
        (Number(searchParams.get('pageCount')) || DEFAULT_PAGE_COUNT) + 1;
    const cards = useTypedSelector(state => state.cards.cards);
    const sortCards = useTypedSelector(state => state.cards.searchParams.sortCards);
    const cardsTotalCount = useTypedSelector(selectCardsTotalCount);

    return (
        <div className={classes.container}>
            <Paper sx={{ width: '100%' }} style={{ marginTop: '25px' }}>
                {isCardsFetched ? (
                    <TableContainer sx={{ maxHeight: 395 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <MainTableRow
                                columns={CARDS_COLUMNS}
                                currentSort={sortCards}
                            />
                            <CardsTableRows rows={cards} />
                        </Table>
                        <NoResultsFound
                            isItemsFetched={isCardsFetched}
                            totalCount={cardsTotalCount}
                        />
                    </TableContainer>
                ) : (
                    <Skeleton
                        animation="wave"
                        variant="rectangular"
                        width={1150}
                        height={ROW_HEIGHT * paramPageCount}
                    />
                )}
            </Paper>
        </div>
    );
};
