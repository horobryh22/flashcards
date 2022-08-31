import React from 'react';

import { InputTypeFileType } from './types';

import { ReturnComponentType } from 'types';

export const InputTypeFile = ({
    children,
    uploadHandler,
    id,
}: InputTypeFileType): ReturnComponentType => {
    return (
        <label htmlFor={id}>
            <input
                type="file"
                onChange={uploadHandler}
                style={{ display: 'none' }}
                id={id}
            />
            {children}
        </label>
    );
};
