import { Control } from 'react-hook-form';

export type PackModalType = {
    packTitle?: string;
    control: Control<{
        name: string;
        private: boolean;
        question: string;
        answer: string;
    }>;
    getValues: () => { name: string; private: boolean };
};
