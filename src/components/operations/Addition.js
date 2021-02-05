import React  from 'react'
import { ADDITION } from '../../types/types'
import { Simbol, InputButton } from '../layouts/Button'

export const Addition = ({ dispatch, state }) => {

    // const inactive = (state) ? 'inactive' : '';

    const handleClick = () => {
        dispatch({
            type: ADDITION,
        })
    }

    return (
        <InputButton>
            <Simbol
                onClick={ handleClick }
                black
                disabled={ state }
            >
                +
            </Simbol>
        </InputButton>
    )
}

