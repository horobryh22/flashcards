import { Paper, Table, TableContainer } from '@mui/material';

import { MainTableRow, TableRows } from 'components';
import { useTypedSelector } from 'hooks';
import { selectCardPacks } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const TableComponent = (): ReturnComponentType => {
    const cardPacks = useTypedSelector(selectCardPacks);

    return (
        <Paper sx={{ width: '100%' }} style={{ marginTop: '25px' }}>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table" sx={{ maxHeight: 550 }}>
                    <MainTableRow />
                    <TableRows rows={cardPacks} />
                </Table>
            </TableContainer>
        </Paper>
    );
};
