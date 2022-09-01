import React, { CSSProperties } from 'react';

export type CardsTopContentType = {
    title: string;
    buttonName: 'Add new pack' | 'Add new card' | 'Learn to pack' | '';
    isButtonNeed: boolean;
    children?: React.ReactNode;
    addItem?: () => void;
    style?: CSSProperties;
    learnPack?: () => void;
};
