import { ModalMapperType } from 'components/modalParent/types';
import { ModalTypes } from 'types';

export type ModalContentType = {
    onSubmit: () => void;
    content: ModalMapperType;
    modalType: ModalTypes;
    onClose: () => void;
    buttonName: string;
};
