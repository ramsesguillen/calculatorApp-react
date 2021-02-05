


export const calculate = ( state ) => {

    if ( isNaN( Number( state.numbers[0] ) ) ) {
        return 0;
    }

        if ( state.add ) {
            return Number( state.stack[0] ) + Number( state.numbers[0] );
        } else if ( state.substrac ) {
            return Number( state.stack[0] ) - Number( state.numbers[0] );
        } else if ( state.div ) {
            return Number( state.stack[0] ) / Number( state.numbers[0] );
        } else if ( state.mult) {
            return Number( state.stack[0] ) * Number( state.numbers[0] );
        } else {
            return Number( state.numbers[0]);
        }
}
