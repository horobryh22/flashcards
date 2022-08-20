import { CardType } from 'api/types/cards/CardType/CardType';

export type GetCardsResponseType = {
    cards: CardType[];
    packUserId: string;
    page: number;
    pageCount: number;
    cardsTotalCount: number;
    minGrade: number;
    maxGrade: number;
    token: string;
    tokenDeathTime: number;
};
