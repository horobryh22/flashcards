import React, { ReactNode } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Box, Modal } from '@mui/material';

import classes from './ModalParent.module.css';

import { StyledButton } from 'components/header/styles';
import { ReturnComponentType } from 'types';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export type ModalParentType = {
    children: ReactNode;
    title: string;
    buttonName: string;
};

export const ModalParent = ({
    children,
    title,
    buttonName,
}: ModalParentType): ReturnComponentType => {
    const [open, setOpen] = React.useState(false);
    // const handleOpen = (): void => setOpen(true);
    const handleClose = (): void => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={classes.modalHeader}>
                        <span>{title}</span>
                        <CloseIcon onClick={handleClose} style={{ cursor: 'pointer' }} />
                    </div>
                    {children}
                    <div className={classes.modalFooter}>
                        <StyledButton
                            variant="contained"
                            onClick={handleClose}
                            style={{
                                padding: '8px 35px',
                                backgroundColor: '#FCFCFC',
                                color: 'black',
                                boxShadow:
                                    '0px 2px 10px rgba(109, 109, 109, 0.9), inset 0px 1px 0px rgba(255, 255, 255, 0.7)',
                            }}
                        >
                            Cancel
                        </StyledButton>
                        <StyledButton
                            variant="contained"
                            style={{
                                padding: '8px 40px',
                                boxShadow:
                                    '0px 2px 10px rgba(109, 109, 109, 0.9), inset 0px 1px 0px rgba(255, 255, 255, 0.7)',
                            }}
                        >
                            {buttonName}
                        </StyledButton>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};
