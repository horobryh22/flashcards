import React, { ReactNode, useEffect } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Box, Modal } from '@mui/material';
import { createPortal } from 'react-dom';

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
    open: boolean;
    onClose: () => void;
    children: ReactNode;
    title: string;
    buttonName: string;
};

const modalRootElement = document.querySelector('#modal');
const element = document.createElement('div');

export const ModalParent = ({
    open,
    onClose,
    children,
    title,
    buttonName,
}: ModalParentType): ReturnComponentType => {
    useEffect(() => {
        if (open && modalRootElement) {
            modalRootElement.appendChild(element);

            return () => {
                modalRootElement.removeChild(element);
            };
        }
    }, []);

    if (open) {
        return createPortal(
            <Modal open={open} onClose={onClose}>
                <Box sx={style}>
                    <div className={classes.modalHeader}>
                        <span>{title}</span>
                        <CloseIcon onClick={onClose} style={{ cursor: 'pointer' }} />
                    </div>

                    {children}
                    <div className={classes.modalFooter}>
                        <StyledButton
                            variant="contained"
                            onClick={onClose}
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
                        <form>
                            <StyledButton
                                type="submit"
                                variant="contained"
                                style={{
                                    padding: '8px 40px',
                                    boxShadow:
                                        '0px 2px 10px rgba(109, 109, 109, 0.9), inset 0px 1px 0px rgba(255, 255, 255, 0.7)',
                                }}
                            >
                                {buttonName}
                            </StyledButton>
                        </form>
                    </div>
                </Box>
            </Modal>,
            element,
        );
    }

    return null;
};
