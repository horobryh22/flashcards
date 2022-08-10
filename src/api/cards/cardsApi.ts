import { instance } from 'api/config';
import { SearchParamsCardsType } from 'api/types';
import {
    CardsType,
    GetCardsType,
    UpdatedGradeType,
} from 'api/types/cards/GetCardType/GetCardsType';

export const cardsApi = {
    getCard: ({
        cardsPack_id,
        cardQuestion,
        cardAnswer,
        min,
        max,
        sortCards,
        page,
        pageCount,
    }: SearchParamsCardsType) => {
        return instance.get<GetCardsType>('cards/card', {
            params: {
                cardsPack_id,
                cardQuestion,
                cardAnswer,
                min,
                max,
                sortCards,
                page,
                pageCount,
            },
        });
    },
    createCard: (card: CardsType) => {
        return instance.post('cards/card', { card });
    },
    deleteCard: (id: string) => {
        return instance.delete('cards/card', {
            params: { id },
        });
    },
    updateCard: (card: CardsType) => {
        return instance.put('cards/card', { card });
    },
    updateGrade: (grade: number, card_id: string) => {
        return instance.put<UpdatedGradeType>('cards/grade', { grade, card_id });
    },
};
