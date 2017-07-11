import * as actions from './actionTypes';
import axios from 'axios';

export function toggleModal(modalIsOpen){
    return {type: actions.TOGGLE_MODAL, modalIsOpen};
}

export function updateRecordCountButtonSuccess(count){
    return {type: actions.UPDATE_COUNT_SUCCESS, count};
}

export function updateRecordCountButton(facetData){
    return function(dispatch){
        return axios.post('http://localhost:3000/query/count', facetData)
        .then(res => {
            dispatch(updateRecordCountButtonSuccess(res.data))
        })
        .catch(error => {
            throw(error);
        })
    }
}
