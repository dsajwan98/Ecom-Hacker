import { combineReducers } from 'redux'
import cart, * as fromCart from './cart'
import products, * as fromProducts from './products'

export default combineReducers({
  cart,
  products
})

export const getCartProducts = state => state.products;
export const getTotal = state => state.products.total;
 // Reducers for corresponding Actions