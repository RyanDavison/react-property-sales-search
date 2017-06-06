import React, { Component } from 'react';
import '../styles/Dropdown.css';

  class Dropdown extends Component {
      constructor(props){
          super(props);
          this.state = {
              selected: props.value,
              title: props.title || 'Select',
              value: props.value || 'Select...',
              display: false
          };

          this.showHide = this.showHide.bind(this);
          this.selectNode = this.selectNode.bind(this);
      }

componentDidMount(x){
    document.addEventListener('click', this.showHide, false);
}

componentWillUnmount () {
   document.removeEventListener('click', this.showHide, false)
 }

selectNode(node) {
    if (node.target.className !== 'heading') {
        this.setState({value: node.target.innerHTML});
    }
}

showHide(event) {
    if (event.target.className === "dropdown") {
        this.setState({isShown: !this.state.isShown});
    } else if (event.target.className !== "dropdown" && event.target.className !== "heading" && this.state.isShown) {
        this.setState({isShown: false});
    }
}

    render() {
      return (
          <div className='dropdown'>{this.state.value}<span className='dropdown'>&#9660;</span>
              <ul style={{"display":this.state.isShown? "block":"none"}} className='drop-nav display' onClick={this.selectNode}>
                  <li className="heading">Improved Sales</li>
                  <li>Agricultural</li>
                  <li>Commercial/Industrial</li>
                  <li>Condo</li>
                  <li>Duplex/Triplex</li>
                  <li>Exempt</li>
                  <li>Manufactured Home</li>
                  <li>Multi Family 4 TO 8</li>
                  <li>Multi Family 9 AND UP</li>
                  <li>Single Family</li>
                  <li>Townhouse</li>
                  <li className="heading">Vacant Sales</li>
                  <li>Agricultural Vacant</li>
                  <li>Commercial/Industrial Vacant</li>
                  <li>Exempt Vacant</li>
                  <li>Residential Vacant</li>
              </ul>
          </div>
      );
    }
  }


export default Dropdown;
