import { Paper, Skeleton, Table, TableContainer } from '@mui/material';

import classes from './PacksTable.module.css';

import { MainTableRow, NoResultsFound, PacksTableRows } from 'components/index';
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

const MAIN_ROW_HEIGHT = 51.18;

export const PacksTable = (): ReturnComponentType => {
    const pageCount = useTypedSelector(selectPageCount);
    const isPacksFetched = useTypedSelector(selectIsPacksFetched);
    const sortPacks = useTypedSelector(selectSortPacks);
    const cardPacks = useTypedSelector(selectCardPacks);
    const cardPacksTotalCount = useTypedSelector(selectPacksTotalCount);

    return (
        <div className={classes.container}>
            <Paper sx={{ width: '100%' }} style={{ marginTop: '25px' }}>
                {isPacksFetched ? (
                    <TableContainer sx={{ maxHeight: 377 }}>
                        <Table stickyHeader aria-label="sticky table">
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
                        height={
                            pageCount > 5
                                ? ROW_HEIGHT * 5 + MAIN_ROW_HEIGHT
                                : ROW_HEIGHT * 4 + MAIN_ROW_HEIGHT
                        }
                    />
                )}
            </Paper>
        </div>
    );
};
