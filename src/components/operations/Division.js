import React from 'react'
import { DIVISION } from '../../types/types';
import { Simbol, InputButton } from '../layouts/Button'

export const Division = ({state, dispatch}) => {

    const handleClick = () => {
        dispatch({
            type: DIVISION,
        });
    }
    return (
        <InputButton>
            <Simbol
                onClick={ handleClick }
                disabled={ state }
                black>
                /
            </Simbol>
        </InputButton>
    )
}
