import { CardsPackType } from 'api/types';
import { AppDispatch } from 'store';
import { addCardsPack, removeCardsPack, updateCardsPack } from 'store/middlewares';
import { ModalTypes } from 'types';

export const chooseAction = (
    modalType: ModalTypes,
    dispatch: AppDispatch,
    packId: string,
    values: CardsPackType,
): void => {
    switch (modalType) {
        case 'addPack':
            dispatch(addCardsPack({ name: values.name, private: values.private }));
            break;
        case 'editPack':
            dispatch(updateCardsPack(packId as string, values.name, values.private));
            break;
        case 'removePack':
            dispatch(removeCardsPack(packId as string));
            break;
        default:
    }
};
