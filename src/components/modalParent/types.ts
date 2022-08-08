import { ReactElement } from 'react';

export type ModalParentType = {
    open: boolean;
    onClose: () => void;
};

export type ModalMapperType = {
    [key: string]: ReactElement;
};
