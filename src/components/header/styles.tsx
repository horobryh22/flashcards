import { AppBar, Button, styled, Toolbar } from '@mui/material';

export const StyledButton = styled(Button, {})`
    background: #366eff;
    box-shadow: 0 4px 18px rgba(54, 110, 255, 0.35),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    border-radius: 30px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.01em;
    text-transform: none;
`;

export const StyledAppBar = styled(AppBar, {})`
    background-color: #fcfcfc;
    box-shadow: 0 2px 10px rgba(109, 109, 109, 0.25),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
`;

export const StyledToolbar = styled(Toolbar, {})`
    display: flex;
    justify-content: space-between;
    padding: 0;
    @media (min-width: 600px) {
        padding: 0;
    }
`;
