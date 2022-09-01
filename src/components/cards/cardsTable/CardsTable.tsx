import { Paper, Table, TableContainer } from '@mui/material';

import classes from './CardsTable.module.css';

import { CardsTableRows, MainTableRow, NoResultsFound } from 'components';
import { CARDS_COLUMNS } from 'constant';
import { useTypedSelector } from 'hooks';
import {
    selectCards,
    selectCardsTotalCount,
    selectIsCardsFetched,
    selectSortCards,
} from 'store/selectors';
import { ReturnComponentType } from 'types';

export const CardsTable = (): ReturnComponentType => {
    const isCardsFetched = useTypedSelector(selectIsCardsFetched);
    const cards = useTypedSelector(selectCards);
    const sortCards = useTypedSelector(selectSortCards);
    const cardsTotalCount = useTypedSelector(selectCardsTotalCount);

    return (
        <div className={classes.container}>
            <Paper sx={{ width: '100%' }} style={{ marginTop: '25px' }}>
                <TableContainer sx={{ maxHeight: 395 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <MainTableRow columns={CARDS_COLUMNS} currentSort={sortCards} />
                        <CardsTableRows rows={cards} />
                    </Table>
                    <NoResultsFound
                        isItemsFetched={isCardsFetched}
                        totalCount={cardsTotalCount}
                    />
                </TableContainer>
            </Paper>
        </div>
    );
};
