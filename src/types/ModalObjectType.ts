import { ModalTypes } from 'types';

export type ModalObjectType = {
    cardId?: string;
    cardQuestion?: string;
    cardAnswer?: string;
    packPrivate?: boolean;
    packId?: string;
    packTitle?: string;
    questionFormat?: 'text' | 'image';
    questionImg?: string;
    answerImg?: string;
    isOpen: boolean;
    type: ModalTypes;
    modalTitle: string;
    buttonName: string;
};
