import { CardsSearchParams, CardType } from 'api/types';

export type CardsStateType = {
    cards: CardType[];
    searchParams: CardsSearchParams;
    isCardsFetched: boolean;
    packUserId: string;
    cardsTotalCount: number;
};
