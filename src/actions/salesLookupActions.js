import * as actions from './actionTypes';
import axios from 'axios';

export function toggleModal(modalIsOpen){
    return {type: actions.TOGGLE_MODAL, modalIsOpen};
}

// export function updateMinSaleDate(date){
//     return {type: actions.UPDATE_MIN_SALE_DATE, date};
// }
//
// export function updateMaxSaleDate(date){
//     return {type: actions.UPDATE_MAX_SALE_DATE, date};
// }

export function updateSalesQualification(qualificationType){
    return {type: actions.UPDATE_SALES_QUALIFICATION_TYPE, qualificationType};
}

export function updatePropertyType(propertyType){
    return {type: actions.UPDATE_PROPERTY_TYPE, propertyType};
}

export function updateMinSaleAmount(minSaleAmount){
    return {type: actions.UPDATE_MIN_SALE_AMOUNT, minSaleAmount};
}

export function updateMaxSaleAmount(maxSaleAmount){
    return {type: actions.UPDATE_MAX_SALE_AMOUNT, maxSaleAmount};
}

export function updateMinAcreage(minAcreage){
    return {type: actions.UPDATE_MIN_ACREAGE, minAcreage};
}

export function updateMaxAcreage(maxAcreage){
    return {type: actions.UPDATE_MAX_ACREAGE, maxAcreage};
}

export function updateMinSquareFeet(minSquareFeet){
    return {type: actions.UPDATE_MIN_SQUARE_FEET, minSquareFeet};
}

export function updateMaxSquareFeet(maxSquareFeet){
    return {type: actions.UPDATE_MAX_SQUARE_FEET, maxSquareFeet};
}

export function updateRecordCountButtonSuccess(recordCount){
    return {type: actions.UPDATE_COUNT_SUCCESS, recordCount};
}


export function updateRecordCountButton(facetData){
    return function(dispatch){
        return axios.post('http://localhost:3000/query/count', facetData)
        .then(res => {
            dispatch(updateRecordCountButtonSuccess(res.data))
        })
        .catch(error => {
            throw(error);
        })
    }
}

// export function fetchArchtypeSuccess(archTypeOptions){
//     return {type: actions.LOAD_ARCHTYPE_OPTIONS_SUCCESS, archTypeOptions};
// }
//
// export function fetchArchtype(){
//     return function(dispatch){
//         axios.post(`http://localhost:3000/query/retrieve/building`)
//         .then(res => {
//             dispatch(fetchArchtypeSuccess([{value: "Any", label: "Any"}].concat(res.data.map(opt => {
//                 return {value: opt['type'], label: opt['type']}
//             })
//         )))
//     })
//     .catch(error => {
//         throw (error)
//     });
// }
// }
//
// function shouldFetchArchType(state) {
//     console.log('mitsy', state.archTypeOptions)
//   const opts = state.archTypeOptions;
//   if (!opts) {
//     return true;
//   } else {
//       return false;
//   }
// }

// export function fetchArchTypesIfNeeded() {
//   return (dispatch, getState) => {
//     if (shouldFetchArchType(getState(), subreddit)) {
//       return dispatch(fetchPosts(subreddit))
//     }
//   }
// }

// export function fetchNeighborhoodSuccess(neighborhoodOptions){
//     return {type: actions.LOAD_NEIGHBORHOOD_OPTIONS_SUCCESS, neighborhoodOptions};
// }
//
// export function fetchNeighborhood(){
//     return function(dispatch){
//         axios.post(`http://localhost:3000/query/retrieve/neighborhood`)
//         .then(res => {
//             dispatch(fetchNeighborhoodSuccess([{value: "Any", label: "Any"}].concat(res.data.map(opt => {
//                 return {value: opt['NBHD_DESC'], label: opt['NBHD_DESC']}
//             })
//         )))
//     })
//     .catch(error => {
//         throw (error)
//     });
// }
// }

// function shouldFetchNeighborhoods(state) {
//   const hoods = state.neighborhoodOptions;
//   if (!hoods) {
//     return true
// } else {
//     return false
// }
// }
