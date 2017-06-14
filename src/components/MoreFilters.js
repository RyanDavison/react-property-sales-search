import React, { Component } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import Qualification from './Qualification';


const filterStyles = {
    display: 'inline-block',
    position:'absolute',
    marginTop: '1.35em',
    cursor:'pointer',
    // paddingLeft: '1em',
    fontWeight: 'bold',
    fontSize: '0.8em'
}

const arrowSpanStyles = {
    marginLeft:"1em",
    float:"right",
    fontSize:"0.8em",
    marginTop: "0.1em"
}

const modalStyle = {
    overlay:{
        top: 246,
        left: '15%',
        right: '15%'
    },
    content:{
        textAlign: 'center',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px',
        borderTop: 'none'
    }
}

    class MoreFilters extends Component {
        constructor(props){
            super(props);
            this.state = {
                modalIsOpen: false
            }
        }

    toggleModal = () => {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        });

        //Placeholder data. This should go away when global state is implemented.
        const data = {
            ACCOUNTNO: 'R05552',
            OWNER: 'Ryan Davison',
            ADDRESS: '584 Sunny'
        }

        axios.post('http://localhost:3000/query', data)//data is a function that returns the state of the search facets
        .then(res =>{
            console.dir(res.data)
        })
    }

      render() {
        return (
          <div style={filterStyles} onClick={this.toggleModal}>
              {this.props.message}<span style={arrowSpanStyles}>&#9660;</span>
              <Modal
                  style={modalStyle}
                  isOpen={this.state.modalIsOpen}
                  onRequestClose={this.toggleModal}
                  shouldCloseOnOverlayClick={true}
                  contentLabel="MCModal"
              >
                  <Qualification />

                  <button onClick={this.toggleModal}>close</button>
              </Modal>
          </div>
        );
      }
    }


export default MoreFilters;
