import * as actions from '../actions/actionTypes';

const initState = {
    recordCount: '0',
    minSaleAmount: '0',
    maxSaleAmount: '10000000'
}

export default function facetsReducer(state = initState, action) {
  switch (action.type) {
      // case actions.LOAD_ARCHTYPE_OPTIONS_SUCCESS:
      //     return {archTypeOptions: action.archTypeOptions};
      // case actions.LOAD_NEIGHBORHOOD_OPTIONS_SUCCESS:
      //         return {neighborhoodOptions: action.neighborhoodOptions};
    // case actions.UPDATE_MIN_SALE_DATE:
    //   return {minSaleDate: action.minSaleDate};
    // case actions.UPDATE_MAX_SALE_DATE:
    //   return {maxSaleDate: action.maxSaleDate};
    case actions.UPDATE_MIN_SALE_AMOUNT:
      return Object.assign({}, state, {minSaleAmount: action.minSaleAmount});
    case actions.UPDATE_MAX_SALE_AMOUNT:
      return Object.assign({}, state, {maxSaleAmount: action.maxSaleAmount});
    case actions.UPDATE_COUNT_SUCCESS:
      return Object.assign({}, state, {recordCount: action.recordCount});
    default:
      return state;
  }
}
