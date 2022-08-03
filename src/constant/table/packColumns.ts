import { PackColumnsType } from 'types';

export const PACK_COLUMNS: PackColumnsType[] = [
    {
        id: 'name',
        label: 'Name',
        minWidth: 170,
        align: 'left',
        sort: 'name',
    },
    {
        id: 'cardsCount',
        label: 'Cards',
        minWidth: 100,
        align: 'left',
        sort: 'cardsCount',
    },
    {
        id: 'updated',
        label: 'Last Updated',
        minWidth: 170,
        align: 'left',
        sort: 'updated',
    },
    {
        id: 'user_name',
        label: 'Created by',
        minWidth: 170,
        align: 'left',
        sort: '',
    },
    {
        id: 'actions',
        label: 'Actions',
        minWidth: 100,
        align: 'left',
        sort: '',
    },
];
