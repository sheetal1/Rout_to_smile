import * as actionTypes from '../action/types';
const INITIAL_STATE = {
    items :[],
}

const itemReducer = (state = INITIAL_STATE, action) => {
    console.log("action",action.payload);
    switch (action.type) {
      case actionTypes.RETRIEVE_SET_ITEMS:
        return {...state,items:action.payload};
      default:
        return state;
    }
} 


export default itemReducer;