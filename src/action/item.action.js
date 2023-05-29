
import itemDataService from "../service/item.service";

import * as actionTypes from './types';

//get all product data
export const getAllPRoducts = () => async (dispatch) => {
  console.log("i am getAllPRoducts");
  try {

    const res = itemDataService.getAll();
    const item = await res.then(result => result.data);
    dispatch({
      type: actionTypes.RETRIEVE_SET_ITEMS,
      payload: item.products,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};






