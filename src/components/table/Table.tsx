import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';

import { ReturnComponentType } from 'types';

interface Column {
    id: 'name' | 'code' | 'population' | 'size' | 'density';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}
const columns: Column[] = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
        id: 'population',
        label: 'Population',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: 'Density',
        minWidth: 170,
        align: 'right',
        // eslint-disable-next-line no-magic-numbers
        format: (value: number) => value.toFixed(2),
    },
];

interface Data {
    name: string;
    code: string;
    population: number;
    size: number;
    density: number;
}

function createData(name: string, code: string, population: number, size: number): Data {
    const density = population / size;

    return { name, code, population, size, density };
}

const rows = [
    // eslint-disable-next-line no-magic-numbers
    createData('India', 'IN', 1324171354, 3287263),
    // eslint-disable-next-line no-magic-numbers
    createData('India', 'IN', 1324171354, 3287263),
    // eslint-disable-next-line no-magic-numbers
    createData('India', 'IN', 1324171354, 3287263),
];

export const TableComponent = (): ReturnComponentType => {
    return (
        <Paper sx={{ width: '100%' }}>
            <TableContainer sx={{ maxHeight: 550 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ background: '#EFEFEF' }} variant="body">
                                Name
                            </TableCell>
                            <TableCell style={{ background: '#EFEFEF' }}>Cards</TableCell>
                            <TableCell style={{ background: '#EFEFEF' }}>
                                Last Updated
                            </TableCell>
                            <TableCell style={{ background: '#EFEFEF' }}>
                                Created by
                            </TableCell>
                            <TableCell style={{ background: '#EFEFEF' }}>
                                Actions
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => {
                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={row.code}
                                >
                                    {columns.map(column => {
                                        const value = row[column.id];

                                        return (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                            >
                                                {column.format &&
                                                typeof value === 'number'
                                                    ? column.format(value)
                                                    : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};
