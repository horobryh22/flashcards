export type AddCardsPackType = {
    cardsPack: CardsPackType;
};

type CardsPackType = {
    name: string;
    deckCover?: string;
    private?: boolean;
};
