import React, { Component } from 'react';

  class Table extends Component {

      constructor(props){
          super(props)
          this.state = {
            //   isShown: true,
              rowData: this.createRowData(),
              columnDefs: this.createColumnDefs()
          }
      }

      createColumnDefs() {
        return [
            {headerName: "Make", field: "make"},
            {headerName: "Model", field: "model"},
            {headerName: "Price", field: "price"}
        ];
    }

    createRowData() {
        return [
            {make: "Toyota", model: "Celica", price: 35000},
            {make: "Ford", model: "Mondeo", price: 32000},
            {make: "Porsche", model: "Boxter", price: 72000}
        ];
    }

    //   createColumnDefs() {
    //     // return [
    //     //     {headerName: "Make", field: "make"},
    //     //     {headerName: "Model", field: "model"},
    //     //     {headerName: "Price", field: "price"}
    //     // ];
    //
    //     return [
    //         {headerName: "Parcel Number (Click for map)", field: "PARCELNO"},
    //         {headerName: "Account Number (Click for details)", field: "ACCOUNTNO"},
    //         {headerName: "Reception No./Book Page (Click for Doc.)", field: "RECEPTION"},
    //         {headerName: "Address", field: "ADDRESS"},
    //         {headerName: "Sale Price", field: "PRICE"},
    //         {headerName: "Sale Date", field: "DATE"},
    //         {headerName: "Grantee", field: "GRANTEE"},
    //         {headerName: "Grantor", field: "GRANTOR"},
    //         // {headerName: "Price", field: "price"},
    //         // {headerName: "Price", field: "price"},
    //         // {headerName: "Price", field: "price"},
    //         // {headerName: "Price", field: "price"},
    //         // {headerName: "Price", field: "price"},
    //         // {headerName: "Price", field: "price"},
    //         // {headerName: "Price", field: "price"},
    //         // {headerName: "Price", field: "price"},
    //         // {headerName: "Price", field: "price"},
    //         // {headerName: "Price", field: "price"},
    //         // {headerName: "Price", field: "price"},
    //         // {headerName: "Price", field: "price"},
    //
    //     ];
    // }
    //
    //   createRowData() {
    //     return [
    //         {PARCELNO: "Toyota", ACCOUNTNO: "Celica", RECEPTION: 35000},
    //         {PARCELNO: "Ford", ACCOUNTNO: "Mondeo", RECEPTION: 32000},
    //         {PARCELNO: "Porsche", ACCOUNTNO: "Boxter", RECEPTION: 72000}
    //     ];
    // }

    render() {
      return (
        //   <table style={{"display": this.state.isShown?"block": "none"}} id="table" className="row-border hover">
        //       <thead>
        //           <tr>
        //               <th>Parcel Number (Click for map)</th>
        //               <th>Account Number (Click for details)</th>
        //               <th>Reception No./Book Page (Click for Doc.)</th>
        //               <th>Address</th>
        //               <th>Sale Price</th>
        //               <th>Sale Date</th>
        //               <th>Grantee</th>
        //               <th>Grantor</th>
        //               <th>Actual Value</th>
        //               <th>Qualification Code</th>
        //               <th>Vacant Code</th>
        //               <th>Neighborhood</th>
        //               <th>Economic Area</th>
        //               <th>Property Use</th>
        //               <th>Total Heated Sq Ft</th>
        //               <th>Price by Heated SQFT</th>
        //               <th>Aprox. Acres</th>
        //               <th>Architectual Style 1st Building</th>
        //               <th>Total # Buildings</th>
        //               <th>Earliest Effective Year Built</th>
        //           </tr>
        //       </thead>
        //       <tbody></tbody>
        //   </table>
      );
    }
  }


export default Table;
