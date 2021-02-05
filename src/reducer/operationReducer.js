
import { calculate } from '../components/helpers/calculate';
import { ADDITION, ADD_VALUE_INPUT, CONCAT, DIVISION, EQUALITY, MULTIPLICATION, RESTART, SUBSTRACT } from '../types/types';

export const operationReducer = ( state, action ) => {
    switch ( action.type ) {
        case EQUALITY:
            return {
                ...state,
                numbers: [calculate( state )],
                substrac: false,
                add: false,
                div: false,
                mult: false,
            }
        case CONCAT:
            return {
                ...state,
                numbers: [ "".concat(...state.numbers, action.payload)  ]
            }
        case ADD_VALUE_INPUT:
            return {
                ...state,
                numbers: [ action.payload.replace(/[^0-9.]/g, '')  ]
            }
        case SUBSTRACT:
            return {
                ...state,
                stack: state.numbers,
                numbers: [],
                substrac: true,
                add: false,
                div: false,
                mult: false,
            }
        case ADDITION:
            return {
                ...state,
                stack: state.numbers,
                numbers: [],
                add: true,
                substrac: false,
                div: false,
                mult: false,
            }
        case DIVISION:
            return {
                ...state,
                stack: state.numbers,
                numbers: [],
                add: false,
                substrac: false,
                div: true,
                mult: false,
            }
        case MULTIPLICATION:
            return {
                ...state,
                stack: state.numbers,
                numbers: [],
                add: false,
                substrac: false,
                div: false,
                mult: true,
            }
        case RESTART:
            return {
                ...state,
                numbers: [],
                stack: [0],
                substrac: false,
                add: false,
                div: false,
                mult: false,
            }
        default:
            return state;
    }
}
