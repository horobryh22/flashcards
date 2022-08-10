import { CardType, SearchParamsType } from 'api/types';

export type PacksStateType = {
    cardPacks: CardType[];
    searchParams: SearchParamsType;
    cardPacksTotalCount: number;
    isInitialized: boolean;
    isMyPack: boolean;
    selectedCardsPack: CardType;
};
