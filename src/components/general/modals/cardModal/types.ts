import { Control } from 'react-hook-form';

export type CardModalType = {
    control: Control<{
        name: string;
        private: boolean;
        question: string;
        answer: string;
    }>;
};
