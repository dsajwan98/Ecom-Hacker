import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../constants/ActionTypes'

const products = (state=[], action) => {
  return [...state];
}

export const getVisibleProducts = (state=[], action) => {
  return [...state];
}

export default products;
