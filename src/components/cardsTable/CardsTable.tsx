import { Paper, Skeleton, Table, TableContainer } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import classes from './CardsTable.module.css';

import { MainTableRow, NoResultsFound, TableRows } from 'components';
import { DEFAULT_PAGE_COUNT } from 'constant';
import { CARDS_COLUMNS } from 'constant/table/cardsColumns';
import { useTypedSelector } from 'hooks';
import { ReturnComponentType } from 'types';

const ROW_HEIGHT = 54.61;

export const CardsTable = (): ReturnComponentType => {
    const [searchParams] = useSearchParams();

    const isCardsFetched = useTypedSelector(state => state.cards.isCardsFetched);
    const paramPageCount =
        (Number(searchParams.get('pageCount')) || DEFAULT_PAGE_COUNT) + 1;
    // const cards = useTypedSelector(state => state.cards.cards);
    const sortCards = useTypedSelector(state => state.cards.searchParams.sortCards);

    return (
        <div className={classes.container}>
            <Paper sx={{ width: '100%' }} style={{ marginTop: '25px' }}>
                {isCardsFetched ? (
                    <TableContainer>
                        <Table
                            stickyHeader
                            aria-label="sticky table"
                            sx={{ maxHeight: 550 }}
                        >
                            <MainTableRow
                                columns={CARDS_COLUMNS}
                                currentSort={sortCards}
                            />
                            <TableRows rows={[]} />
                        </Table>
                        <NoResultsFound />
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
