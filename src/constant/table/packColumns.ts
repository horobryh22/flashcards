import { PackColumnsType } from 'types';

export const PACK_COLUMNS: PackColumnsType[] = [
    {
        id: 'name',
        label: 'Name',
        minWidth: 280,
        align: 'left',
        sort: 'name',
    },
    {
        id: 'cardsCount',
        label: 'Cards',
        minWidth: 230,
        align: 'left',
        sort: 'cardsCount',
    },
    {
        id: 'updated',
        label: 'Last Updated',
        minWidth: 230,
        align: 'left',
        sort: 'updated',
    },
    {
        id: 'user_name',
        label: 'Created by',
        minWidth: 230,
        align: 'left',
        sort: '',
    },
    {
        id: 'actions',
        label: 'Actions',
        minWidth: 180,
        align: 'center',
        sort: '',
    },
];
