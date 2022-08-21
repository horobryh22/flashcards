import { CardsSortType } from 'api/types';

export type CardsColumnsType = {
    id: 'question' | 'answer' | 'updated' | 'grade';
    label: string;
    minWidth: number;
    align: 'center' | 'right' | 'left';
    sort: CardsSortType;
};
