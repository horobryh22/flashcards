import { SortTypes } from 'api/types';

export type CardsSearchParams = {
    cardAnswer: string;
    cardQuestion: string;
    cardsPack_id: string;
    min: number;
    max: number;
    sortCards: SortTypes;
    page: number;
    pageCount: number;
};
