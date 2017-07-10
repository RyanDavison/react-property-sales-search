import {combineReducers} from 'redux';
import modalDisplay from './displayReducer';
import recordCount from './facetsReducer';

const rootReducer = combineReducers({
    modalDisplay,
    recordCount
});

export default rootReducer;
