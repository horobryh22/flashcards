import { ReactNode } from 'react';

import { Nullable } from 'types/Nullable';

export type MenuType = {
    children?: ReactNode;
    element: Nullable<HTMLElement>;
    open: boolean;
    setElement: (element: Nullable<HTMLElement>) => void;
};
