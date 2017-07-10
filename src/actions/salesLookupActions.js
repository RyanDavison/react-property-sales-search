import * as actions from './actionTypes';

export function toggleModal(modalIsOpen){
    return {type: actions.TOGGLE_MODAL, modalIsOpen: modalIsOpen};
}

export function updateRecordCountButton(count){
    return {type: actions.UPDATE_COUNT, recordCount: count};
}
