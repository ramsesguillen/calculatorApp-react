import React from 'react'
import { CONCAT } from '../../types/types';
import { Button, InputButton } from './Button'

export const Number = ({ dispatch, character }) => {

    const handleClick = () => {
        dispatch({
            type: CONCAT,
            payload: character
        });
    }
    return (
        <InputButton>
            <Button
                onClick={ handleClick }
            >
                { character }
            </Button>
        </InputButton>
    )
}
