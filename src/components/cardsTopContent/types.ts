import React, { CSSProperties } from 'react';

export type CardsTopContentType = {
    title: string;
    buttonName: string;
    isButtonNeed: boolean;
    children?: React.ReactNode;
    callback: () => void;
    style?: CSSProperties;
};
