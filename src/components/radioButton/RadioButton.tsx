import React from 'react';

import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

import { RadioButtonType } from './types';

import { StyledButton } from 'components/header/styles';
import { useAppDispatch } from 'hooks';
import { updateCardGrade } from 'store/middlewares';
import { ReturnComponentType } from 'types';

export const RadioButton = ({
    card_id,
    setVisible,
}: RadioButtonType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [grade, setGrade] = React.useState('1');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setGrade((event.target as HTMLInputElement).value);
    };

    const handleClick = (): void => {
        dispatch(updateCardGrade(Number(grade), card_id));
        setVisible(false);
        setGrade('1');
    };

    return (
        <>
            <FormControl>
                <RadioGroup
                    value={grade}
                    onChange={handleChange}
                    name="radio-buttons-group"
                >
                    <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Did not know"
                    />
                    <FormControlLabel value="2" control={<Radio />} label="Forgot" />
                    <FormControlLabel
                        value="3"
                        control={<Radio />}
                        label="A lot of thought"
                    />
                    <FormControlLabel value="4" control={<Radio />} label="Confused" />
                    <FormControlLabel
                        value="5"
                        control={<Radio />}
                        label="Knew the answer"
                    />
                </RadioGroup>
            </FormControl>
            <StyledButton
                style={{ marginTop: 40 }}
                variant="contained"
                fullWidth
                onClick={handleClick}
            >
                Next
            </StyledButton>
        </>
    );
};
