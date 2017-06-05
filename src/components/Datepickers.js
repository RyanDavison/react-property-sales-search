import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Moment from 'moment';


const labelStyle = {
     display: "block",
       fontSize: "0.8em",
       fontWeight: "bold",
       textAlign: "left",
       marginLeft: "0.1em"
 }


  class Datepickers extends Component {
      constructor(props){
          super(props);
          this.state = {
              startDate: Moment().subtract(props.months, 'months'),
              endDate: Moment()
          };
          this.handleChangeStart = this.handleChangeStart.bind(this);
          this.handleChangeEnd = this.handleChangeEnd.bind(this);


      }

      handleChangeStart(date) {
        this.setState({
          startDate: date
        });
        }

        handleChangeEnd(date) {
          this.setState({
            endDate: date
          });
          }



    render() {
      return (
          <div>
              <div style={{"display":"inline-block"}}>
                  <label style={labelStyle} className='dateRange' htmlFor='minimumSaleDate'>Min Sales Date</label>
                  <DatePicker
                      customInput={<input className='facet' placeholder='Choose Date' id='minimumSaleDate' style={{"width":"95%"}} />}
                      selected={this.state.startDate}
                      selectsStart
                      startDate={this.state.startDate}
                      endDate={this.state.endDate}
                      onChange={this.handleChangeStart}
                  />
              </div>

              <div style={{"display":"inline-block"}}>
                  <label style={labelStyle} className='dateRange' htmlFor='maximumSaleDate'>Max Sales Date</label>
                  <DatePicker
                      customInput={<input className='facet' placeholder='Choose Date' id='maximumSaleDate' style={{"width":"95%"}} />}
                      selected={this.state.endDate}
                      selectsEnd
                      startDate={this.state.startDate}
                      endDate={this.state.endDate}
                      onChange={this.handleChangeEnd}
                  />
              </div>

          </div>
        //   <div className="Datepickers">
        //       <div>
        //           <label className='dateRange' htmlFor='minimumSaleDate'>Min Sales Date</label>
        //           <input type='text' className='datePick facet' placeholder='Choose Date' id='minimumSaleDate' />
        //           <DatePicker selected={this.state.startDate} onChange={this.handleChange} />
        //       </div>
        //       <div>
        //           <label className='dateRange' htmlFor='maximumSaleDate'>Max Sales Date</label>
        //           <input type='text' className='datePick facet' placeholder='Choose Date' id='maximumSaleDate' />
        //       </div>
        //   </div>
      );
    }
  }


export default Datepickers;
