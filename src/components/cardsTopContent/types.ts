import React from 'react';

export type CardsTopContentType = {
    title: string;
    buttonName: string;
    isButtonNeed: boolean;
    children?: React.ReactNode;
    callback: () => void;
};
