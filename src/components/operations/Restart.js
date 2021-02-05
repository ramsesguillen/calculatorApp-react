import React from 'react'
import { RESTART } from '../../types/types';
import { InputButton, Simbol } from '../layouts/Button'

export const Restart = ({ dispatch}) => {

    const handleClick = () => {
        dispatch({
            type: RESTART,
        });
    }

    return (
        <InputButton>
            <Simbol
                onClick={ handleClick }
                red>
                c
            </Simbol>
        </InputButton>
    )
}
