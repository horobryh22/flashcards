import { CardsSearchParams, CardType } from 'api/types';
import { Nullable } from 'types';

export type CardsStateType = {
    cards: CardType[];
    searchParams: CardsSearchParams;
    isCardsFetched: boolean;
    packUserId: string;
    cardsTotalCount: number;
    packName: string;
    packPrivate: boolean;
    packDeckCover: Nullable<string>;
    isPackDeleted: boolean;
};
