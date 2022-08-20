import { CardsSortType } from 'api/types';

export type CardsSearchParams = {
    cardAnswer: string;
    cardQuestion: string;
    cardsPack_id: string;
    min: number;
    max: number;
    sortCards: CardsSortType;
    page: number;
    pageCount: number;
};
