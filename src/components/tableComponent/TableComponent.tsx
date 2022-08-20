import { Paper, Skeleton, Table, TableContainer } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import classes from './TableComponent.module.css';

import { MainTableRow, NoResultsFound, TableRows } from 'components';
import { DEFAULT_PAGE_COUNT } from 'constant';
import { useTypedSelector } from 'hooks';
import { selectCardPacks, selectIsPacksFetched } from 'store/selectors';
import { ReturnComponentType } from 'types';

const ROW_HEIGHT = 54.61;

export const TableComponent = (): ReturnComponentType => {
    const [searchParams] = useSearchParams();

    const isPacksFetched = useTypedSelector(selectIsPacksFetched);
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
                            <MainTableRow />
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
