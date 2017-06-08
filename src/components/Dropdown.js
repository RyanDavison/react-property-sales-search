import React, { Component } from 'react';
import '../styles/Dropdown.css';

  class Dropdown extends Component {
      constructor(props){
          super(props);
          this.state = {
              value: props.value || 'Select...',
              display: false,
              listItems: props.option
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
                  {this.state.listItems.map(item =>{
                      return <li key={item.value} className={item.type} >{item.value}</li>
                  })}
              </ul>
          </div>
      );
    }
  }


export default Dropdown;
