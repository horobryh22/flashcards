import { ModalTypes } from 'types';

export type ModalObjectType = {
    packId?: string;
    packTitle?: string;
    isOpen: boolean;
    type: ModalTypes;
    modalTitle: string;
    buttonName: string;
};
