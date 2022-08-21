import { Paper, Skeleton, Table, TableContainer } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import classes from './PacksTable.module.css';

import { MainTableRow, NoResultsFound, TableRows } from 'components';
import { DEFAULT_PAGE_COUNT, PACK_COLUMNS } from 'constant';
import { useTypedSelector } from 'hooks';
import { selectCardPacks, selectIsPacksFetched, selectSortPacks } from 'store/selectors';
import { ReturnComponentType } from 'types';

const ROW_HEIGHT = 54.61;

export const PacksTable = (): ReturnComponentType => {
    const [searchParams] = useSearchParams();

    const isPacksFetched = useTypedSelector(selectIsPacksFetched);
    const sortPacks = useTypedSelector(selectSortPacks);
    const paramPageCount =
        (Number(searchParams.get('pageCount')) || DEFAULT_PAGE_COUNT) + 1;
    const cardPacks = useTypedSelector(selectCardPacks);

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
                            <TableRows rows={cardPacks} />
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
