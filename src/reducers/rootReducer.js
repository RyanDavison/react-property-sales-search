import {combineReducers} from 'redux';
import modalDisplay from './displayReducer';
import facets from './facetsReducer';

const rootReducer = combineReducers({
    modalDisplay,
    facets
});

export default rootReducer;
