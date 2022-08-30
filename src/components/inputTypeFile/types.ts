import { ChangeEvent, ReactNode } from 'react';

export type InputTypeFileType = {
    children: ReactNode;
    uploadHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};
