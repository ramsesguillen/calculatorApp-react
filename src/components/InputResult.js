import React from 'react'
import { ADD_VALUE_INPUT } from '../types/types';
import { ContainerInput, Input } from './layouts/Input'

export const InputResult = ({ state, dispatch }) => {
    let value = state.numbers;

    const handleChange = ({target}) => {
        if ( isNaN( Number( state.numbers[0] ) ) ) {
            value = 0;
        }

        dispatch({
            type: ADD_VALUE_INPUT,
            payload: target.value
        });
    }

    return (
        <ContainerInput>
            <Input
                type="text"
                value={ value }
                onChange={ handleChange }
                placeholder={ state.stack[0]}
                autocomplete="off"
            />
        </ContainerInput>

    )
}
