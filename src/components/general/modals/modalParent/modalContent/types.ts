import { ModalMapperType } from 'components/general/modals/modalParent/types';
import { ModalTypes } from 'types';

export type ModalContentType = {
    onSubmit: () => void;
    content: ModalMapperType;
    modalType: ModalTypes;
    onClose: () => void;
    buttonName: string;
};
