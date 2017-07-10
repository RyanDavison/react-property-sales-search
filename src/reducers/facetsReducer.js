import * as actions from '../actions/actionTypes';

export default function displayReducer(state = {count: 0}, action){
    switch(action.type){
        case actions.UPDATE_COUNT:
            return {count: action.count};
        default:
            return state;
    }
}
