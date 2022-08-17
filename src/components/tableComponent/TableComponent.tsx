import { Paper, Skeleton, Table, TableContainer } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import { MainTableRow, TableRows } from 'components';
import { DEFAULT_PAGE_COUNT } from 'constant';
import { PACKS_STATUS } from 'enums';
import { useTypedSelector } from 'hooks';
import { selectCardPacks, selectPacksStatus } from 'store/selectors';
import { ReturnComponentType } from 'types';

const ROW_HEIGHT = 54.61;

export const TableComponent = (): ReturnComponentType => {
    const [searchParams] = useSearchParams();

    const status = useTypedSelector(selectPacksStatus);
    const paramPageCount =
        (Number(searchParams.get('pageCount')) || DEFAULT_PAGE_COUNT) + 1;
    const cardPacks = useTypedSelector(selectCardPacks);

    return (
        <Paper sx={{ width: '100%' }} style={{ marginTop: '25px' }}>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table" sx={{ maxHeight: 550 }}>
                    {status === PACKS_STATUS.LOADING ? (
                        <Skeleton
                            animation="wave"
                            variant="rectangular"
                            width={1150}
                            height={ROW_HEIGHT * paramPageCount}
                        />
                    ) : (
                        <>
                            <MainTableRow />
                            <TableRows rows={cardPacks} />
                        </>
                    )}
                </Table>
            </TableContainer>
        </Paper>
    );
};
