import { ChangeEvent } from 'react';

export type UploadButtonType = {
    id: string;
    handleUpload: (e: ChangeEvent<HTMLInputElement>) => void;
    buttonName: string;
};
