import { GetCardsType } from 'api/types/cards/GetCardType/GetCardsType';

export type GetCurrentCardResponseType = {
    cards: GetCardsType[];
    cardsTotalCount: number;
    maxGrade: number;
    minGrade: number;
    page: number;
    pageCount: number;
    packUserId: string;
};
