import React, { Component } from 'react';
import '../styles/Dropdown.css';

  class Dropdown extends Component {
      constructor(props){
          super(props);
          this.state = {
              value: props.value || 'Select...',
              display: false,
              listItems: props.option,
              baseClass: props.baseclass || 'base-class',
              customStyles: props.customStyles || {dropdown:{},dropNav:{},ulContainer:{}}
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
    if (event.target.className.indexOf(this.state.baseClass) > -1) {
        this.setState({isShown: !this.state.isShown});
    } else if (event.target.className.indexOf(this.state.baseClass) <= -1 && event.target.className !== "heading" && this.state.isShown) {
        this.setState({isShown: false});
    }
}


    render() {
        const ulDisplay = {
            "display":this.state.isShown? "block":"none"
        }
      return (
          <div style={{...this.state.customStyles.ulContainer}} className={`dropdown ${this.state.baseClass}`}>{this.state.value}<span className={`dropdown ${this.state.baseClass}`}>&#9660;</span>
              <ul style={{...ulDisplay, ...this.state.customStyles.dropNav}} className='drop-nav display' onClick={this.selectNode}>
                  {this.state.listItems.map(item =>{
                      return <li key={item.value} className={item.type} >{item.value}</li>
                  })}
              </ul>
          </div>
      );
    }
  }


export default Dropdown;
