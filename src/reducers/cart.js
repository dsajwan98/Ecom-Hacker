import {
    ADD_TO_CART,
    CHECKOUT_REQUEST,
    CHECKOUT_FAILURE
  } from '../constants/ActionTypes'
  
  const initialState = {
    addedIds: [],
    quantityById: {}
  }
  
  // Reducers for corresponding Actions
  const cart = (state=[], action)=>{
    switch(action.type){
      case ADD_TO_CART:
        return [...state];
      case CHECKOUT_REQUEST:
        return [...state];
      case CHECKOUT_FAILURE:
        return [...state];
      default:
        return [...state];
    }
  }  

  export default cart