import { ModalTypes } from 'types';

export type ModalObjectType = {
    cardId?: string;
    cardTitle?: string;
    packPrivate?: boolean;
    packId?: string;
    packTitle?: string;
    isOpen: boolean;
    type: ModalTypes;
    modalTitle: string;
    buttonName: string;
};
