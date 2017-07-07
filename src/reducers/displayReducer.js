import * as actions from '../actions/actionTypes';

export default function displayReducer(state = [], action){
    switch(action.type){
        case actions.TOGGLE_MODAL:
            return [...state,
            Object.assign({}, action.modalIsOpen)];
        default:
            return state;
    }
}
