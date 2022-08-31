import { FormValuesType } from 'components';
import { AppDispatch } from 'store';
import {
    addCard,
    addCardsPack,
    removeCard,
    removeCardsPack,
    updateCard,
    updateCardsPack,
} from 'store/middlewares';
import { ModalTypes } from 'types';

export const chooseAction = (
    modalType: ModalTypes,
    dispatch: AppDispatch,
    packId: string,
    values: FormValuesType,
    cardId: string,
    cardPack_id: string,
    packCover: string,
    questionCover: string,
    answerCover: string,
    questionFormat: 'text' | 'image',
): void => {
    switch (modalType) {
        case 'addPack':
            dispatch(
                addCardsPack({
                    name: values.name,
                    private: values.private,
                    deckCover: packCover,
                }),
            );
            break;
        case 'editPack':
            dispatch(
                updateCardsPack(packId as string, values.name, values.private, packCover),
            );
            break;
        case 'removePack':
            dispatch(removeCardsPack(packId as string));
            break;
        case 'addCard':
            dispatch(
                addCard(
                    values.question,
                    values.answer,
                    cardPack_id,
                    answerCover,
                    questionCover,
                ),
            );
            break;
        case 'removeCard':
            dispatch(removeCard(cardId));
            break;
        case 'editCard':
            if (questionFormat === 'text') {
                dispatch(
                    updateCard(values.question, values.answer, cardId, 'none', 'none'),
                );
            }
            if (questionFormat === 'image') {
                dispatch(
                    updateCard(
                        'no question',
                        'no answer',
                        cardId,
                        answerCover,
                        questionCover,
                    ),
                );
            }
            break;
        default:
    }
};
