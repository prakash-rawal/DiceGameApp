import * as actionTypes from '../action/type'
export const todosReducer = (state = [], action) =>{

    switch(action.type){
        case actionTypes.ADDNEW_TODO:
        return [ action.payload, ...state]

        default:
            return state;
    }
}