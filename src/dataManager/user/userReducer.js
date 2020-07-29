import  { SAVE_SESSION } from './userTypes';

const INITIAL_STATE = {
    homeRoute: ''
}

export default (state = INITIAL_STATE, action) => {
    switch ( action.type ) {
        case SAVE_SESSION:
            return {
                ...state,
                homeRoute: action.payload
            };
        default: return state;
    }
}