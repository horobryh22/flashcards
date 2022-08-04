import { CardsType } from 'api/types/cards/GetCardType/GetCardsType';

export type CardsListPropsType = {
    cards: CardsType[];
    cardsPack_id: string;
};
