import { CardType } from 'api/types/index';

export type GetCardsResponseType = {
    cardPacks: CardType[];
    page: number;
    pageCount: number;
    cardPacksTotalCount: number;
    minCardsCount: number;
    maxCardsCount: number;
    token: string;
    tokenDeathTime: number;
};
