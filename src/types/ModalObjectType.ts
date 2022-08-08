import { ModalTypes } from 'types';

export type ModalObjectType = {
    packPrivate?: boolean;
    packId?: string;
    packTitle?: string;
    isOpen: boolean;
    type: ModalTypes;
    modalTitle: string;
    buttonName: string;
};
