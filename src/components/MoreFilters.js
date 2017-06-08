import React, { Component } from 'react';
import Modal from 'react-modal';

const filterStyles = {
    display: 'inline-block',
    position:'absolute',
    marginTop: '1.35em',
    cursor:'pointer',
    paddingLeft: '1em',
    fontWeight: 'bold',
    fontSize: '0.8em'
}

const arrowSpanStyles = {
    marginLeft:"1em",
    float:"right",
    fontSize:"0.8em",
    marginTop: "0.1em"
}

// const showFilters = ()=>{
//     alert(`Filters overlay will go here`)
// }

// const MoreFilters = (props) =>
//   (
//       <div style={filterStyles} onClick={showFilters}>
//           {props.message}<span style={arrowSpanStyles}>&#9660;</span>
//           <Modal />
//       </div>
//   );

    class MoreFilters extends Component {
        constructor(props){
            super(props);
            this.state = {
                modalIsOpen: false
            }
        }

        toggleModal = ()=>{
            this.setState({modalIsOpen: !this.state.modalIsOpen})
        }

      render() {
        return (
          <div style={filterStyles} onClick={this.toggleModal}>
              {this.props.message}<span style={arrowSpanStyles}>&#9660;</span>
              <Modal
                  isOpen={this.state.modalIsOpen}
                  //   onAfterOpen={this.afterOpenModal}
                  onRequestClose={this.toggleModal}
                  shouldCloseOnOverlayClick={false}
                  contentLabel="MCModal"
              >
                  <h2 ref="subtitle">Hello</h2>
                  <button onClick={this.toggleModal}>close</button>
              </Modal>
          </div>
        );
      }
    }


export default MoreFilters;
