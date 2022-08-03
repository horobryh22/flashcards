import { ColumnSortType } from 'types';

export type PackColumnsType = {
    id: 'name' | 'cardsCount' | 'updated' | 'user_name' | 'actions';
    label: string;
    minWidth: number;
    align: 'center' | 'right' | 'left';
    sort: ColumnSortType;
};
