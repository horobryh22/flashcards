import { Paper, Skeleton, Table, TableContainer } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import classes from './PacksTable.module.css';

import { MainTableRow, NoResultsFound, PacksTableRows } from 'components';
import { PACK_COLUMNS, ROW_HEIGHT } from 'constant';
import { useTypedSelector } from 'hooks';
import {
    selectCardPacks,
    selectIsPacksFetched,
    selectPacksTotalCount,
    selectPageCount,
    selectSortPacks,
} from 'store/selectors';
import { ReturnComponentType } from 'types';

export const PacksTable = (): ReturnComponentType => {
    const [searchParams] = useSearchParams();

    const pageCount = useTypedSelector(selectPageCount);
    const isPacksFetched = useTypedSelector(selectIsPacksFetched);
    const sortPacks = useTypedSelector(selectSortPacks);
    const paramPageCount = (Number(searchParams.get('pageCount')) || pageCount) + 1;
    const cardPacks = useTypedSelector(selectCardPacks);
    const cardPacksTotalCount = useTypedSelector(selectPacksTotalCount);

    return (
        <div className={classes.container}>
            <Paper sx={{ width: '100%' }} style={{ marginTop: '25px' }}>
                {isPacksFetched ? (
                    <TableContainer>
                        <Table
                            stickyHeader
                            aria-label="sticky table"
                            sx={{ maxHeight: 550 }}
                        >
                            <MainTableRow
                                currentSort={sortPacks}
                                columns={PACK_COLUMNS}
                            />
                            <PacksTableRows rows={cardPacks} />
                        </Table>
                        <NoResultsFound
                            isItemsFetched={isPacksFetched}
                            totalCount={cardPacksTotalCount}
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
