import React from 'react';

import { ShowPacksCards } from 'components/overTableRow/ShowPacksCards';
import { ReturnComponentType } from 'types';

export const Test = (): ReturnComponentType => {
    return (
        <div>
            <div>Test</div>;
            <ShowPacksCards />
        </div>
    );
};
