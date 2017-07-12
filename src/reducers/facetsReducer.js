import * as actions from '../actions/actionTypes';

const initState = {
    minSaleAmount: '0',
    maxSaleAmount: '10000000',
    minAcreage: '0',
    maxAcreage: '500',
}

export default function facetsReducer(state = initState, action) {
  switch (action.type) {
    // case actions.UPDATE_MIN_SALE_DATE:
    //   return {minSaleDate: action.minSaleDate};
    // case actions.UPDATE_MAX_SALE_DATE:
    //   return {maxSaleDate: action.maxSaleDate};
    case actions.UPDATE_MIN_SALE_AMOUNT:
      return Object.assign({}, state, {minSaleAmount: action.minSaleAmount});
    case actions.UPDATE_MAX_SALE_AMOUNT:
      return Object.assign({}, state, {maxSaleAmount: action.maxSaleAmount});
      case actions.UPDATE_MIN_ACREAGE:
        return Object.assign({}, state, {minAcreage: action.minAcreage});
      case actions.UPDATE_MAX_ACREAGE:
        return Object.assign({}, state, {maxAcreage: action.maxAcreage});
    default:
      return state;
  }
}
