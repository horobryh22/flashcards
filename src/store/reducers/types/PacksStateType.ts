import { CardType, SearchParamsType } from 'api/types';

export type PacksStateType = {
    cardPacks: CardType[];
    searchParams: SearchParamsType;
    userId: string;
};
