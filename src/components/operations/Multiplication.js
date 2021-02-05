import React from 'react'
import { MULTIPLICATION } from '../../types/types';
import { Simbol, InputButton } from '../layouts/Button'

export const Multiplication = ({ state, dispatch }) => {

    const handleClick = () => {
        dispatch({
            type: MULTIPLICATION,
        });
    }

    return (
        <InputButton>
            <Simbol
                onClick={ handleClick }
                disabled={ state }
                black>
                x
            </Simbol>
        </InputButton>
    )
}
