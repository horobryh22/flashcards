import { REQUEST_STATUS } from 'enums';
import { ModalObjectType, Nullable } from 'types';

export type AppStateType = {
    status: REQUEST_STATUS;
    error: Nullable<string>;
    isInitialized: boolean;
    modal: ModalObjectType;
};
