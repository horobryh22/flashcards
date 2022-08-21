import { CardsColumnsType } from 'types';

export const CARDS_COLUMNS: CardsColumnsType[] = [
    {
        id: 'question',
        label: 'Question',
        minWidth: 280,
        align: 'left',
        sort: 'question',
    },
    {
        id: 'answer',
        label: 'Answer',
        minWidth: 230,
        align: 'left',
        sort: 'answer',
    },
    {
        id: 'updated',
        label: 'Last Updated',
        minWidth: 230,
        align: 'left',
        sort: 'updated',
    },
    {
        id: 'grade',
        label: 'Grade',
        minWidth: 230,
        align: 'left',
        sort: 'grade',
    },
];
