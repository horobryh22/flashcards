import React, { CSSProperties } from 'react';

export type CardsTopContentType = {
    title: string;
    buttonName: string;
    isButtonNeed: boolean;
    children?: React.ReactNode;
    addItem?: () => void;
    style?: CSSProperties;
    learnPack?: () => void;
};
