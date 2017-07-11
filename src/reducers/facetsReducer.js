import * as actions from '../actions/actionTypes';
const initState = {
    count:0,
}

export default function displayReducer(state = initState, action){
    switch(action.type){
        case actions.LOAD_ARCTHYPE_OPTIONS:
            return {archType: action.archtype};
        case actions.UPDATE_COUNT_SUCCESS:
            return {count: action.count};
        default:
            return state;
    }
}
