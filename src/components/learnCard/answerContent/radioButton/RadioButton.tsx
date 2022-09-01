import React from 'react';

import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

import { RadioButtonType } from './types';

import { StyledButton } from 'components/common/header/styles';
import { useAppDispatch } from 'hooks';
import { updateCardGrade } from 'store/middlewares';
import { ReturnComponentType } from 'types';

export const ANSWER_OPTIONS: { value: string; label: string }[] = [
    { value: '1', label: 'Did not know' },
    { value: '2', label: 'Forgot' },
    { value: '3', label: 'A lot of thought' },
    { value: '4', label: 'Confused' },
    { value: '5', label: 'Knew the answer' },
];

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

    const mappedOptions = ANSWER_OPTIONS.map(option => {
        return (
            <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
            />
        );
    });

    return (
        <>
            <FormControl>
                <RadioGroup
                    value={grade}
                    onChange={handleChange}
                    name="radio-buttons-group"
                >
                    {mappedOptions}
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
