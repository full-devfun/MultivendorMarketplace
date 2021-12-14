import { combineReducers } from "redux";
import ProductReducer from './ProductReducer'
import UserReducer from './UserReducer'
import CartReducer from './CartReducer'
import CardReducer from './CardReducer'
import OrderReducer from './OrderReducer'
import TransactionReducer from './TransactionReducer'

const rootReducer = combineReducers({
  products: ProductReducer,
  cards: CardReducer,
  user: UserReducer,
  cart: CartReducer,
  order: OrderReducer,
  transactions: TransactionReducer
});

export default rootReducer;
