import React, { Component } from 'react';
import $ from 'jquery';
import DataTable from 'datatables.net';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as salesLookupActions from '../actions/salesLookupActions';

const columns = [
    // {title: "Parcel Number (Click for map)"},
    {title: "Parcel Number (Click for map)"},
    {title: "Account Number (Click for details)"},
    {title: "Reception No./Book Page (Click for Doc.)"},
    {title: "Address"},
    {title: "Sale Price"},
    {title: "Sale Date"},
    {title: "Grantee"},
    {title: "Grantor"},
    {title: "Actual Value"},
    {title: "Qualification Code"},
    {title: "Vacant Code"},
    {title: "Neighborhood"},
    {title: "Economic Area"},
    {title: "Property Use"},
    {title: "Total Heated Sq Ft"},
    {title: "Price by Heated SQFT"},
    {title: "Aprox. Acres"},
    {title: "Architectual Style 1st Building"},
    {title: "Total # Buildings"},
    {title: "Earliest Effective Year Built"}
];

// const dataSet = [
//     {"parcel": "2458-254-14-125", "account": "R05223", "reception": "125478", "address":"584 Sunny Meadow Lane","price": "$360000","date": "10/15/17","grantor": "Me","grantee": "you"},
//     {"parcel": "2458-254-14-125", "account": "R05223", "reception": "125478", "address":"584 Sunny Meadow Lane","price": "$360000","date": "10/15/17","grantor": "Me","grantee": "you"}
// ];

// const dataSet = [
//     ["2458-254-14-125", "R05223", "125478", "584 Sunny Meadow Lane", "$360000", "10/15/17", "Me", "you"],
//     ["2458-254-14-125", "R05223", "125478", "584 Sunny Meadow Lane", "$360000", "10/15/17", "Me", "you"],
// ];

// let dataSet2;


  class Table extends Component {

      constructor(props){
          super(props)
          this.state = {
              myData: this.props.recordData,
              isShown: true
          }
      }

      componentWillMount(){
          this.setState({myData: this.props.recordData})
          // dataSet2 = this.props.recordData;
          // let myList2 = "(N'";
          //
          //   for (i = 0; i < len; i++) {
          //       myList2 += (data[i][1] + "', N'");
          //       data[i][0] = "<a href='http://emap.mesacounty.us/viewer/?maptype=propsales&amp;ACCOUNTNO=" + data[i][1] + "' target='_blank'>" + data[i][0] + "</a>";
          //       data[i][1] = "<a href='http://emap.mesacounty.us/assessor_lookup/Assessor_Parcel_Report.aspx?Account=" + data[i][1] + "' target='_blank'>" + data[i][1] + "</a>";
          //       data[i][2] = "<a href='https://recording.mesacounty.us/Landmarkweb//search/DocumentBy?ClerkFileNumber=" + data[i][2] + "' target='_blank'>" + data[i][2] + "</a>";
          //       table.row.add(data[i]);
          //   }
          //   myList2 = myList2.slice(0, -4) + ")";
      }

      componentDidMount() {
console.log(`mountd`)
    }


    componentWillUnmount(){
       $('.data-table-wrapper')
       .find('table')
       .DataTable()
       .destroy(true);
    }

    componentWillUpdate() {
        $(this.refs.main).DataTable({
           dom: '<"data-table-wrapper"t>',
           data: this.state.myData,
           columns,
           ordering: false
        });
    }

    render() {
      return (
          <div>
              <table ref="main" />
          </div>
      );
    }
  }

  const mapStateToProps = (state, ownProps)=>{
      return {
          recordData: state.records.recordData
      }
  }

  const mapDispatchToProps = (dispatch)=>{
      return {
          actions: bindActionCreators(salesLookupActions, dispatch)
      }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Table);


// export default Table;
