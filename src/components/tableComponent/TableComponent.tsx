import { Paper, Table, TableContainer } from '@mui/material';

import { MainTableRow, TableRows } from 'components';
import { useTypedSelector } from 'hooks';
import { selectCardPacks } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const TableComponent = (): ReturnComponentType => {
    const cardPacks = useTypedSelector(selectCardPacks);

    console.log(cardPacks);

    return (
        <Paper sx={{ width: '100%' }} style={{ marginTop: '25px' }}>
            <TableContainer sx={{ maxHeight: 550 }}>
                <Table stickyHeader aria-label="sticky table">
                    <MainTableRow />
                    <TableRows rows={cardPacks} />
                </Table>
            </TableContainer>
        </Paper>
    );
};
