import { SortTypes } from 'api/types';
import { CardsColumnsType, PackColumnsType } from 'types';

export type OrderDirectionType = 'asc' | 'desc';

export type MainTableRowType = {
    columns: PackColumnsType[] | CardsColumnsType[];
    currentSort: SortTypes;
};
