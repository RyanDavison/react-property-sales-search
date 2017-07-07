import * as action from './actionTypes';

export function toggleModal(modalIsOpen){
    return {type: action.TOGGLE_MODAL, modalIsOpen};
}
