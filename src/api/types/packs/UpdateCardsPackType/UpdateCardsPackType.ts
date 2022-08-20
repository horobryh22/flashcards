export type UpdateCardsPackType = {
    cardsPack: CardsPackType;
};

type CardsPackType = {
    _id: string;
    name: string;
    deckCover?: string;
    private?: boolean;
};
