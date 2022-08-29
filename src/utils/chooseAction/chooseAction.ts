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
    packCover?: string,
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
            dispatch(addCard(values.question, values.answer, cardPack_id));
            break;
        case 'removeCard':
            dispatch(removeCard(cardId));
            break;
        case 'editCard':
            dispatch(updateCard(values.question, values.answer, cardId));
            break;
        default:
    }
};
