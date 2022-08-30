import React from 'react';

import { InputTypeFileType } from './types';

import { ReturnComponentType } from 'types';

export const InputTypeFile = ({
    children,
    uploadHandler,
}: InputTypeFileType): ReturnComponentType => {
    return (
        <label htmlFor="input-file">
            <input
                type="file"
                onChange={uploadHandler}
                style={{ display: 'none' }}
                id="input-file"
            />
            {children}
        </label>
    );
};
