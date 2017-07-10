import * as actions from './actionTypes';

export function toggleModal(modalIsOpen){
    return {type: actions.TOGGLE_MODAL, modalIsOpen: modalIsOpen};
}
