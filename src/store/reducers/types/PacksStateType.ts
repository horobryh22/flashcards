import { CardType, SearchParamsType } from 'api/types';

export type PacksStateType = {
    isPacksFetched: boolean;
    cardPacks: CardType[];
    searchParams: SearchParamsType;
    cardPacksTotalCount: number;
    isInitialized: boolean;
};
