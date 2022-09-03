import React from 'react';

import { StyledButton } from 'components/common/header/styles';
import classes from 'components/general/modals/modalParent/modalContent/ModalContent.module.css';
import {
    CANCEL_BUTTON_STYLE,
    MAIN_BUTTON_STYLE,
} from 'components/general/modals/modalParent/modalContent/styles';
import { ModalContentType } from 'components/general/modals/modalParent/modalContent/types';
import { ReturnComponentType } from 'types';

export const ModalContent = ({
    modalType,
    content,
    buttonName,
    onClose,
    onSubmit,
}: ModalContentType): ReturnComponentType => {
    return (
        <form onSubmit={onSubmit}>
            {content[modalType]}
            <div className={classes.modalFooter}>
                <StyledButton
                    variant="contained"
                    onClick={onClose}
                    style={CANCEL_BUTTON_STYLE}
                >
                    Cancel
                </StyledButton>
                <StyledButton
                    type="submit"
                    variant="contained"
                    style={MAIN_BUTTON_STYLE}
                    color={buttonName === 'Delete' ? 'error' : undefined}
                >
                    {buttonName}
                </StyledButton>
            </div>
        </form>
    );
};
