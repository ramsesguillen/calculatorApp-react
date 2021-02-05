import React, { useReducer } from 'react'
import { operationReducer } from '../reducer/operationReducer'
import { InputResult } from './InputResult'
import { ContainerMain, Container, ContainerButton } from './layouts/Containers'
import { Number } from './layouts/Number'
import { Addition } from './operations/Addition'
import { Division } from './operations/Division'
import { Equality } from './operations/Equality'
import { Multiplication } from './operations/Multiplication'
import { Restart } from './operations/Restart'
import { Subtraction } from './operations/Subtraction'

export const Main = () => {

    const initialState = {
        numbers: [],
        stack: [0],
        substrac: false,
        add: false,
        div: false,
        mult: false,
    };

    const [state, dispatch] = useReducer(operationReducer, initialState )

    return (
        <ContainerMain>
            <Container>
                <InputResult
                    state= { state }
                    dispatch={ dispatch }
                />
                <ContainerButton>
                    <Number dispatch={ dispatch }  character="7" />
                    <Number dispatch={ dispatch }  character="8" />
                    <Number dispatch={ dispatch }  character="9" />
                    <Addition
                        dispatch={ dispatch }
                        state={ state.add }
                    />
                    <Number dispatch={ dispatch } character="4" />
                    <Number dispatch={ dispatch } character="5" />
                    <Number dispatch={ dispatch } character="6" />
                    <Subtraction
                        dispatch={ dispatch }
                        state={ state.substrac }
                    />
                    <Number dispatch={ dispatch } character="1" />
                    <Number dispatch={ dispatch } character="2" />
                    <Number dispatch={ dispatch } character="3" />
                    <Multiplication
                        dispatch={ dispatch }
                        state={ state.mult }
                    />
                    <Restart
                        dispatch={ dispatch }
                    />
                    <Number dispatch={ dispatch } character="0" />
                    <Equality
                        dispatch={ dispatch }
                    />
                    <Division
                        dispatch={ dispatch }
                        state={ state.div }
                    />
                </ContainerButton>
            </Container>
        </ContainerMain>
    )
}
