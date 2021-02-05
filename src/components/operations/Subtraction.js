import React from 'react'
import { SUBSTRACT } from '../../types/types';
import { Simbol, InputButton } from '../layouts/Button'

export const Subtraction = ({ state, dispatch }) => {

    const handleClick = () => {
        dispatch({
            type: SUBSTRACT
        });
    }

    return (
        <InputButton>
            <Simbol
                onClick={ handleClick }
                disabled={ state }
                black>
                -
            </Simbol>
        </InputButton>
    )
}
