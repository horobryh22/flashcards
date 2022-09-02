import { Control } from 'react-hook-form';

export type CustomInputType = {
    control: Control<{
        name: string;
        private: boolean;
        question: string;
        answer: string;
    }>;
    name: 'name' | 'private' | 'question' | 'answer';
    label: string;
};
