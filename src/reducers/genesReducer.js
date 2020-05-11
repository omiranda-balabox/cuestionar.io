import {
    ACTUALIZAR_GENES,
    CARGANDO,
    ERROR
 } from '../types/genesTypes';

const INITIAL_STATE = {
    genes: {},
    cargando: false,
    error: ''
}

export default (state = INITIAL_STATE, action) => {
    switch( action.type ) {
        case ACTUALIZAR_GENES:
            return {
                ...state,
                genes: action.payload,
                cargando: false,
                error: ''
            };
        case CARGANDO:
            return {
                ...state,
                cargando: true,
            };
        case ERROR:
            return {
                ...state,
                error: action.payload,
                cargando: false
            };
        default:
            return state;
    }
}