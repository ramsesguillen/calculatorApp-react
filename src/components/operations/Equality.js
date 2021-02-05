import React from 'react'
import { EQUALITY } from '../../types/types';
import { Simbol, InputButton } from '../layouts/Button'

export const Equality = ({ dispatch }) => {

    const handleClick = () => {
        dispatch({
            type: EQUALITY,
        });
    }
    return (
        <InputButton>
            <Simbol
                onClick={ handleClick }
                className="simbol" black>
                =
            </Simbol>
        </InputButton>
    )
}
