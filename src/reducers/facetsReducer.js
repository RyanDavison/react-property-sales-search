import * as actions from '../actions/actionTypes';

export default function displayReducer(state = {recordCount: 0}, action){
    switch(action.type){
        case actions.UPDATE_COUNT:
            return {recordCount: action.recordCount};
        default:
            return state;
    }
}
